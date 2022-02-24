export interface TagProps {
  name: string;
  count: number;
}

const Tag = ({ name }: TagProps) => (
  <div data-testid="tag-name" className="tag">
    {name}
  </div>
);

export default Tag;
