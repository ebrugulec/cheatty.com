import type { GetServerSideProps } from "next";

import MarkdownPreview, { MarkdownProps } from "@components/MarkdownPreview";

import styles from "./Tag.module.scss";

const TagDetail = ({ markdowns }: { markdowns: MarkdownProps[] }) => {
  return (
    <div className={styles.tagPage}>
      <div className={styles.markdownList}>
        {markdowns.map((markdown) => (
          <MarkdownPreview key={markdown.slug} {...markdown} />
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
    markdowns = markdowns.filter(({ tags }) => tags.includes(slug));
  }

  return {
    props: { markdowns },
  };
};
