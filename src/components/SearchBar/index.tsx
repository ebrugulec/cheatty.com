import styles from "./SearchBar.module.scss";

export interface SearchBarProps {
  value?: string;
  onSearchHandle(value: string): void;
}

const SearchBar = ({ value, onSearchHandle }: SearchBarProps) => (
  <div className={styles.searchWrapper}>
    <input
      placeholder="Search..."
      className={styles.searchBar}
      value={value}
      onChange={(e) => onSearchHandle(e.target.value)}
      data-testid="search-bar"
    />
  </div>
);

export default SearchBar;
