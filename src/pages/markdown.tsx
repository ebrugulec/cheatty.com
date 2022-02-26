import type { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { MarkdownProps } from "../components/markdown/Markdown";

export interface MarkdownPropsWithContent extends MarkdownProps {
  content: string,
  error?: string
}
const Markdown = ({ content }: MarkdownPropsWithContent) => {
  return (
    <div>
    {content &&
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
    
    }
    </div>
  );
};

export default Markdown;
