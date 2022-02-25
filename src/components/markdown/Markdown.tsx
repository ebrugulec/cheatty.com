import type { NextPage } from "next";
import Link from 'next/link'

export interface MarkdownProps {
  slug: string,
  title: string,
  description: string,
  tags: string[],
}

const Markdown = ({ title, slug, description, tags }: MarkdownProps) => {
  return (
    <Link href={`/cheatsheet/${slug}`}>
      <div>
        {title}
      </div>
    </Link>
  );
};

export default Markdown;
