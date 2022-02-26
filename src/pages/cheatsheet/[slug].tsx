import type { GetServerSideProps } from "next";
import Markdown, { MarkdownPropsWithContent } from '../markdown'

const CheatsheetDetail = ({ content, slug, title, description, tags, error }: MarkdownPropsWithContent) => {
  return (
    <div>
      {error ?
        <div>{error}</div>
        :
        <Markdown
          key={slug}
          content={content}
          title={title}
          slug={slug}
          description={description}
          tags={tags}
        />
      }
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
        tags
      },
    };
  } catch {
      return {
        props: {
          error: 'Something went wrong.'
        }
      }
  }
};