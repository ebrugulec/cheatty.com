import type { NextPage } from "next";

export interface MarkdownProps {
  slug: string,
  title: string,
  description: string,
  tags: string[]
}

const Markdown = ({ title, slug, description, tags }: MarkdownProps) => {
  return (
    <div key={slug}>
      {title}
    </div>
  );
};

export default Markdown;
