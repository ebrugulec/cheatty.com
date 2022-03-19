import Link from "next/link";

import Tags from "@components/Tags";

import styles from "./Card.module.scss";

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

const Card = ({ title, slug, description, tags }: MarkdownProps) => {
  const shortenerDesc =
    description.length > 150 ? description.slice(0, 150) + "..." : description;

  return (
    <Link href={`/cheatsheet/${slug}`}>
      <a>
        <div className={styles.cheatsheetCard}>
          <div>
            <h3>{title}</h3>
            <p>{shortenerDesc}</p>
          </div>
          <Tags tags={tags} />
        </div>
      </a>
    </Link>
  );
};

export default Card;
