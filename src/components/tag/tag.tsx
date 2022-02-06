import type { NextPage } from "next";

export interface TagProps {
	tagName: String
}

const Tag = ({ tagName }: TagProps) => (
  <div data-testid="tag-name" className="tag">
    {tagName}
  </div>
);

export default Tag;
