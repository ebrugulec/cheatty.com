import type { NextPage } from "next";
import react, { useState } from 'react';

import allMarkdowns from '../../data/markdowns.json'
import Markdown, { MarkdownProps } from "../components/markdown/Markdown";
import SearchBar from "../components/searchBar/SearchBar";

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [markdowns, setMarkdowns] = useState(allMarkdowns);

  const searchMarkdowns = (value: string) => {
    setSearchValue(value)

    if (value.length === 0) {
      setMarkdowns(allMarkdowns)
    } else {
      const searchValueLowerCase = value.toLowerCase()
      const filteredMarkdownsWithTitle: MarkdownProps[] = []
      const filteredMarkdownsWithDescription: MarkdownProps[] = []

      allMarkdowns.map((markdown) => {
        const title = markdown.title.toLowerCase();
        const description = markdown.description.toLowerCase();

        if(title.includes(searchValueLowerCase)) {
          filteredMarkdownsWithTitle.push(markdown)
        } else if (description.includes(searchValueLowerCase)) {
          filteredMarkdownsWithDescription.push(markdown)
        }
      })

      const filteredMarkdowns = [...filteredMarkdownsWithTitle, ...filteredMarkdownsWithDescription];

      setMarkdowns(filteredMarkdowns)
    }
  }
  return (
    <div>
      <SearchBar
       value={searchValue}
       onSearchHandle={searchMarkdowns}
      />
      {markdowns.map((markdown: MarkdownProps) => (
        <Markdown
          title={markdown.title}
          slug={markdown.slug}
          description={markdown.description}
          tags={markdown.tags}
        />
      ))}
    </div>
  )
};

export default Home;
