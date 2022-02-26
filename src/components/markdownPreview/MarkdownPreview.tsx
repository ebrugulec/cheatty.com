import Link from "next/link";

export interface MarkdownProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

export interface MarkdownPropsWithContent extends MarkdownProps {
  content: string;
  error?: string;
}

const MarkdownPreview = ({ title, slug, description, tags }: MarkdownProps) => {
  return (
    <Link href={`/cheatsheet/${slug}`}>
      <div className="cheatsheet-card">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="tags">
          {tags.map((tag) => (
            <div key={tag} className="tag">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default MarkdownPreview;
