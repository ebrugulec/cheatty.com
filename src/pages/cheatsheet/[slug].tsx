import { useState } from "react";
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

const CheatsheetDetail = ({
  title,
  description,
  tags,
  content,
  error,
  similarMarkdowns
}: MarkdownPropsWithContent) => {
  const contentReadingTime = readingTime(content)

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
        {similarMarkdowns?.map((markdown: MarkdownProps) => (
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
    const markdowns = await import('../../data/markdowns.json');
    const { content, slug, title, description, tags } = markdown;

    const allMarkdowns = markdowns.default
    const contentLowerCase = content.toLowerCase();
    const similarMarkdowns: MarkdownProps[] = [];

    for (let markdown of allMarkdowns) {
      if (similarMarkdowns.length > 2) break

      const markdownTags = markdown.tags.map(({ name }) => name)
      const isTagExists = markdownTags.some(tag => contentLowerCase.includes(tag))

      if (isTagExists && markdown.slug !== slug) {
        similarMarkdowns.push(markdown)
      }
    }

    return {
      props: {
        content,
        slug,
        title,
        description,
        tags,
        similarMarkdowns
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
