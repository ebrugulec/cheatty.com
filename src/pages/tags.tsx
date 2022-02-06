import type { NextPage } from "next";
import Tag from "../components/tag/tag";

import tags from '../../data/tags.json'

const Tags: NextPage = () => (
  <div data-testid="tags">
    {tags.map((tag: string) => (
      <Tag key={tag} tagName={tag} />
    ))}
  </div>
)

export default Tags;
