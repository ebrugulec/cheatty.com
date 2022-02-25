import type { NextPage } from "next";
import react, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Markdown, { MarkdownPropsWithContent } from '../markdown'

const CheatsheetDetail: NextPage = () => {
  const { query } = useRouter();
  const [markdown, setMarkdown] = useState<MarkdownPropsWithContent>()

  useEffect(() => {
    import(`../../../content/${query.slug}.json`)
      .then((data) => {
        console.log('data', data)
        setMarkdown(data)

      })
      .catch(console.error);
  }, [query])

  return (
    <div>
      {markdown ?
        <Markdown
          key={markdown.slug}
          content={markdown.content}
          title={markdown.title}
          slug={markdown.slug}
          description={markdown.description}
          tags={markdown.tags}
        />
        :
        <div>Markdown not found</div>
      }
    </div>
  );
};

export default CheatsheetDetail;
