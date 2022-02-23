import type { NextPage } from "next";
import react, { useState } from 'react';

import allMarkdowns from '../../data/markdowns.json'
import SearchBar from "../components/searchBar/SearchBar";

const Home: NextPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [markdowns, setMarkdowns] = useState(allMarkdowns);

  const searchMarkdowns = (value: string) => {
    setSearchValue(value)

    const searchRegex = new RegExp(value, 'gi');

    let filteredMarkdownWithTitle = allMarkdowns.filter((markdown) => (
      searchRegex.test(markdown.title)
    ))

    if (filteredMarkdownWithTitle.length > 0) {
      setMarkdowns(filteredMarkdownWithTitle)
    } else {
      let filteredMarkdownWithDescription = allMarkdowns.filter((markdown) => (
        searchRegex.test(markdown.description)
      ))

      setMarkdowns(filteredMarkdownWithDescription)
    }
  }
  return (
    <div>
      <SearchBar
       value={searchValue}
       onSearchHandle={searchMarkdowns}
      />
    </div>
  )
};

export default Home;
