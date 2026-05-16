function SearchBar({ query, setQuery }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
