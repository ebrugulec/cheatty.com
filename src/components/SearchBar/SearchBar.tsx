export interface SearchBarProps {
  value?: string;
  onSearchHandle(value: string): void;
}

const SearchBar = ({ value, onSearchHandle }: SearchBarProps) => (
  <input
    placeholder="Search..."
    value={value}
    onChange={(e) => onSearchHandle(e.target.value)}
    data-testid="search-bar"
  />
);

export default SearchBar;
