import Link from "next/link";

import Tag from "@components/Tag";

import styles from "./MarkdownPreview.module.scss";

export interface MarkdownProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

export interface MarkdownPropsWithContent extends MarkdownProps {
  content: string;
  error?: string;
}

const MarkdownPreview = ({ title, slug, description, tags }: MarkdownProps) => {
  return (
    <Link href={`/cheatsheet/${slug}`}>
      <div className={styles.cheatsheetCard}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default MarkdownPreview;
