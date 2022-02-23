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
      let searchValueLowerCase = value.toLowerCase()

      let filteredMarkdowns = allMarkdowns.filter((markdown) => {
        let title = markdown.title.toLowerCase();
        let description = markdown.description.toLowerCase();

        return title.includes(searchValueLowerCase) || description.includes(searchValueLowerCase)
      })

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
