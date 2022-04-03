import Link from "next/link";
import styles from "./Tag.module.scss";

export interface TagProps {
  name: string;
  slug: string;
  count: number;
}

const Tag = ({ name, slug }: { name: string; slug: string }) => (
  <Link href={`/tag/${slug}`}>
    <div data-testid="tag-name" className={styles.tag}>
      {name}
    </div>
  </Link>
);

export default Tag;
