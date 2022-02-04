import type { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const testMarkdownContent = `
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Content Lorem Ipsum...

\`higlight\` text

*italic*

**bold**

JS code sample
~~~js
const value = 21;
~~~

CSS code sample

~~~css
div {
  border: 1px solid gray;
}
~~~


JSX code sample

~~~jsx
<Button onClick={handleClick}>Click</Button>
~~~


BASH code sample

~~~bash
mkdir directory
cd directory
touch test.txt
~~~


SQL code sample

~~~sql
SELECT * FROM Customers WHERE Country='Mexico';
~~~
`;

const Home: NextPage = () => {
  return (
    <div>
      Markdown Test!
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
        {testMarkdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default Home;
