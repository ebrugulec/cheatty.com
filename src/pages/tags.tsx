import type { NextPage } from "next";

import Tag, { TagProps } from "../components/Tag/Tag";

import tags from "../../data/tags.json";

const Tags: NextPage = () => (
  <div data-testid="tags">
    {tags.map((tag: TagProps) => (
      <Tag key={tag.name} name={tag.name} count={tag.count} />
    ))}
  </div>
);

export default Tags;
