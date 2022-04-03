import Tag, { TagProps } from "@components/Tag";

import styles from "./Tags.module.scss";

export interface TagsProps {
  tags: TagProps[];
}

const Tags = (props: TagsProps) => (
  <div className={styles.tags}>
    {props.tags.map(({ name, slug }) => (
      <Tag key={name} name={name} slug={slug} />
    ))}
  </div>
);

export default Tags;
