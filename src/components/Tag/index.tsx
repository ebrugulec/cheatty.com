import Link from "next/link";
import styles from "./Tag.module.scss";

export interface TagProps {
  name: string;
  count: number;
}

const Tag = ({ name }: { name: string }) => (
  <Link href={`/tag/${name}`}>
    <a>
      <div data-testid="tag-name" className={styles.tag}>
        {name}
      </div>
    </a>
  </Link>
);

export default Tag;
