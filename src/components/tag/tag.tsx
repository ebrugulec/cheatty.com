import type { NextPage } from "next";

export interface TagProps {
	name: string,
  count: number,
}

const Tag = ({ name }: TagProps) => (
  <div data-testid="tag-name" className="tag" key={name}>
    {name}
  </div>
);

export default Tag;
