import type { GetServerSideProps } from "next";
import Head from "next/head";

import Card, { MarkdownProps } from "@components/Card";

import styles from "./Tag.module.scss";

interface TagDetailPageProps {
  markdowns: MarkdownProps[];
  tag: string;
}

const TagDetail = ({ tag, markdowns }: TagDetailPageProps) => {
  return (
    <div className={styles.tagPage}>
      <Head>
        <title>Tag - {tag}</title>
      </Head>
      <div className={styles.markdownList}>
        {markdowns.map((markdown) => (
          <Card key={markdown.slug} {...markdown} />
        ))}
      </div>
    </div>
  );
};

export default TagDetail;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let { default: markdowns } = await import(`@data/markdowns.json`);

  const { slug } = query;

  if (typeof slug === "string") {
    markdowns = markdowns.filter(({ tags }) =>
      tags.find(({ slug: markDownSlug }) => markDownSlug === slug)
    );
  }

  return {
    props: { tag: slug, markdowns },
  };
};
