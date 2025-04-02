function SearchBox({ search, setSearch, handleSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter city name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {/* This is a placeholder for the most viewed cities*/}
        <p>Mostly viewed cities:
            <button>Vilnius</button>
            <button>Kaunas</button>
            <button>Klaipėda</button>
        </p>
      </div>
    </div>
  );
}
export default SearchBox;