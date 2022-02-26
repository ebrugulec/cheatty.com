import styles from "./Tag.module.scss";

export interface TagProps {
  name: string;
  count: number;
}

const Tag = ({ name }: { name: string }) => (
  <div data-testid="tag-name" className={styles.tag}>
    {name}
  </div>
);

export default Tag;
