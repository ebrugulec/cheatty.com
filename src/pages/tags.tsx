import type { NextPage } from "next";
import tags from '../../data/tags.json'
import Tag from "../components/tag/tag";

const Tags: NextPage = () => {
  return (
    <div>
      {tags.map((tag: string) => {
          return <Tag tagName={tag} />
        })}
    </div>
  )
};

export default Tags;
