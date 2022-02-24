export interface MarkdownProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

const Markdown = ({ title }: MarkdownProps) => {
  return <div>{title}</div>;
};

export default Markdown;
