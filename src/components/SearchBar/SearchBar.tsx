export interface SearchBarProps {
  value?: string;
  onSearchHandle(value: string): void;
}

const SearchBar = ({ value, onSearchHandle }: SearchBarProps) => (
  <div className="search-wrapper">
    <input
      placeholder="Search..."
      className="search-bar"
      value={value}
      onChange={(e) => onSearchHandle(e.target.value)}
      data-testid="search-bar"
    />
  </div>
);

export default SearchBar;
