function SearchBar({ search, setSearch }) {
  const searchCase = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <h4>
        <small>Search</small>
      </h4>
      <input value={search} type="text" onChange={searchCase} />;
      <div>
        <input type="checkbox"></input>
        <label>only show products in stock</label>
      </div>
    </>
  );
}

export default SearchBar;
