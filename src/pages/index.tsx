import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import Card, { MarkdownProps } from "@components/Card";
import Tags from "@components/Tags";
import SearchBar from "@components/SearchBar";
import { sortTags } from "@utils/common";

import tags from "@data/tags.json";
import allMarkdowns from "@data/markdowns.json";

import styles from "./Home.module.scss";
import { useEffect } from "react";

const SLICE_TAG_COUNT = 15;

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [markdowns, setMarkdowns] = useState(allMarkdowns);
  const [mount, setMount] = useState(false);

  const sortedTags = sortTags(tags).slice(0, SLICE_TAG_COUNT);

  const searchMarkdowns = (value: string) => {
    setSearchValue(value);

    if (value.length === 0) {
      setMarkdowns(allMarkdowns);
    } else {
      const searchValueLowerCase = value.toLowerCase();
      const filteredMarkdownsWithTitle: MarkdownProps[] = [];
      const filteredMarkdownsWithDescription: MarkdownProps[] = [];

      allMarkdowns.forEach((markdown) => {
        const title = markdown.title.toLowerCase();
        const description = markdown.description.toLowerCase();

        if (title.includes(searchValueLowerCase)) {
          filteredMarkdownsWithTitle.push(markdown);
        } else if (description.includes(searchValueLowerCase)) {
          filteredMarkdownsWithDescription.push(markdown);
        }
      });

      const filteredMarkdowns = [
        ...filteredMarkdownsWithTitle,
        ...filteredMarkdownsWithDescription,
      ];

      setMarkdowns(filteredMarkdowns);
    }
  };

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <div className={styles.homepage}>
      <Head>
        <title>Dev Cheat Sheet</title>
      </Head>
      {mount &&
        ReactDOM.createPortal(
          <SearchBar value={searchValue} onSearchHandle={searchMarkdowns} />,
          document.querySelector("#searchWrapper")!
        )}
      <div className={styles.markdownList}>
        {markdowns.map((markdown: MarkdownProps) => (
          <Card
            key={markdown.slug}
            title={markdown.title}
            slug={markdown.slug}
            description={markdown.description}
            tags={markdown.tags}
          />
        ))}
      </div>
      <div className={styles.tagList}>
        <Tags tags={sortedTags} />
      </div>
    </div>
  );
};

export default Home;
