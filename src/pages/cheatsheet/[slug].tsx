import type { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { MarkdownPropsWithContent } from "../../components/markdownPreview/MarkdownPreview";

const CheatsheetDetail = ({
  content,
  slug,
  title,
  description,
  tags,
  error,
}: MarkdownPropsWithContent) => {
  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
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
      )}
    </div>
  );
};

export default CheatsheetDetail;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const markdown = await import(`../../../content/${query.slug}.json`);
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
