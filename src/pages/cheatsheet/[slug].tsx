import { useEffect, useState } from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Card, { MarkdownProps, MarkdownPropsWithContent } from "@components/Card";
import Tags from "@components/Tags";

import styles from "./Cheatsheet.module.scss";
import { readingTime } from "@utils/common";

import markdowns from "@data/markdowns.json";

const CheatsheetDetail = ({
  title,
  description,
  tags,
  content,
  error,
  slug
}: MarkdownPropsWithContent) => {
  const [similarMarkdowns, setSimilarMarkdowns] = useState<MarkdownProps[] | []>([])

  const contentReadingTime = readingTime(content)
  
  useEffect(() => {
    if (!content) return

    const contentLowerCase = content.toLowerCase();
    const similarMarkdownList: MarkdownProps[] = [];

    for (let markdown of markdowns) {
      if (similarMarkdownList.length > 2) break

      for (let markdownTag of markdown.tags) {
        if (contentLowerCase.includes(markdownTag.name) && markdown.slug !== slug) {
          similarMarkdownList.push(markdown)
          break
        }
      }
    }

    setSimilarMarkdowns(similarMarkdownList)
  }, [])

  return (
    <div className={styles.page}>
      {error && !content ? (
        <div>{error}</div>
      ) : (
        <>
          <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
          </Head>
          <Tags tags={tags} />
          <div className={styles.readingTime}>{contentReadingTime} min read</div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    language={match[1]}
                    style={twilight}
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
      <div className={styles.similarMarkdowns}>
        {similarMarkdowns.map((markdown: MarkdownProps) => (
          <Card
            key={markdown.slug}
            title={markdown.title}
            slug={markdown.slug}
            description={markdown.description}
            tags={markdown.tags}
          />
        ))}
      </div>
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
