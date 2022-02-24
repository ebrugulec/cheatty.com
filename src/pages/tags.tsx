import type { NextPage } from "next";
import Tag, { TagProps } from "../components/tag/tag";

import tags from '../../data/tags.json'

const Tags: NextPage = () => (
  <div data-testid="tags">
    {tags.map((tag: TagProps) => (
      <Tag key={tag.name} name={tag.name} />
    ))}
  </div>
)

export default Tags;
