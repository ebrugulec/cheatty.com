import type { NextPage } from "next";

export interface TagProps {
	name: string,
  count: number,
  key?: string
}

const Tag = ({ key, name }: TagProps) => (
  <div
    key={key}
    data-testid="tag-name"
    className="tag"
  >
    {name}
  </div>
);

export default Tag;
