import type { GetServerSideProps } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { MarkdownPropsWithContent } from "@components/Card";
import Tags from "@components/Tags";

import styles from "./Cheatsheet.module.scss";

const CheatsheetDetail = ({
  title,
  description,
  tags,
  content,
  error,
}: MarkdownPropsWithContent) => {
  return (
    <div className={styles.page}>
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
          </Head>
          <Tags tags={tags} />
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </>
      )}
    </div>
  );
};

export default CheatsheetDetail;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const markdown = await import(`../../content/${query.slug}.json`);
    const { content, slug, title, description, tags } = markdown;

    return {
      props: {
        content,
        slug,
        title,
        description,
        tags,
      },
    };
  } catch {
    return {
      props: {
        error: "Something went wrong.",
      },
    };
  }
};
