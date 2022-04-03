import type { NextPage } from "next";

import Tag, { TagProps } from "../components/Tag";

import tags from "@data/tags.json";

const Tags: NextPage = () => (
  <div data-testid="tags">
    {tags.map((tag: TagProps) => (
      <Tag key={tag.name} name={tag.name} slug={tag.slug} />
    ))}
  </div>
);

export default Tags;
