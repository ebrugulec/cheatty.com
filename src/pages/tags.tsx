import type { NextPage } from "next";

import allTags from '../../data/tags.json'
import Tag from "../components/tag/tag";

const Tags: NextPage = () => {
  return (
    <div>
      {
        allTags?.map((tag: String) => {
          return <Tag tagName={tag} />
        })
      }
    </div>
  )
};

export default Tags;
