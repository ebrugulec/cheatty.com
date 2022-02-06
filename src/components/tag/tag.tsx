import type { NextPage } from "next";
import { TagProps } from "../../types";

const Tag = ({ tagName }: TagProps) => {
  return (
    <div data-testid="tag-name">
      {tagName}
    </div>
  )
};

export default Tag;
