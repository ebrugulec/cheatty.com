import type { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { MarkdownPropsWithContent } from "@components/Card";

import styles from "./Cheatsheet.module.scss";
import Tag from "@components/Tag";

const CheatsheetDetail = ({ content, error, tags }: MarkdownPropsWithContent) => {
  return (
    <div className={styles.page}>
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className={styles.tagList}>
            {tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
          <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
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
