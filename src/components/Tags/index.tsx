import Tag from "@components/Tag";

import styles from "./Tags.module.scss";

export interface TagsProps {
  tags: string[];
}

const Tags = (props: TagsProps) => (
  <div className={styles.tags}>
    {props.tags.map((tag) => (
      <Tag key={tag} name={tag} />
    ))}
  </div>
);

export default Tags;
