import "../styles/search-bar.css";

export default function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search by product or producer"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
