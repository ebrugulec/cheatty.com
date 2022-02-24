import type { NextPage } from "next";

export interface MarkdownProps {
  slug: string,
  title: string,
  description: string,
  tags: string[],
  key?: string
}

const Markdown = ({ key, title, slug, description, tags }: MarkdownProps) => {
  return (
    <div key={key}>
      {title}
    </div>
  );
};

export default Markdown;
