import type { NextPage } from "next";
import React, { useState } from "react";

import Markdown, {
  MarkdownProps,
} from "../components/markdownPreview/MarkdownPreview";
import SearchBar from "../components/searchBar/SearchBar";
import Tag, { TagProps } from "../components/tag/tag";
import { sortTags } from "../utils/common";

import allMarkdowns from "../../data/markdowns.json";
import tags from "../../data/tags.json";

const SLICE_TAG_COUNT = 15;

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [markdowns, setMarkdowns] = useState(allMarkdowns);

  const sortedTags = sortTags(tags).slice(0, SLICE_TAG_COUNT);

  const searchMarkdowns = (value: string) => {
    setSearchValue(value);

    if (value.length === 0) {
      setMarkdowns(allMarkdowns);
    } else {
      const searchValueLowerCase = value.toLowerCase();
      const filteredMarkdownsWithTitle: MarkdownProps[] = [];
      const filteredMarkdownsWithDescription: MarkdownProps[] = [];

      allMarkdowns.map((markdown) => {
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

  return (
    <div className="homepage">
      {sortedTags.map((tag: TagProps) => (
        <Tag key={tag.name} name={tag.name} count={tag.count} />
      ))}
      <SearchBar value={searchValue} onSearchHandle={searchMarkdowns} />
      <div className="results">
        {markdowns.map((markdown: MarkdownProps) => (
          <Markdown
            key={markdown.slug}
            title={markdown.title}
            slug={markdown.slug}
            description={markdown.description}
            tags={markdown.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
