function SearchBar({ search, setSearch, checked, setChecked }) {
  const searchCase = (e) => {
    setSearch(e.target.value);
  };

  function handleChange() {
    setChecked(!checked);
  }

  return (
    <>
      <h4>
        <small>Search</small>
      </h4>
      <input value={search} type="text" onChange={searchCase} />
      <div>
        <input type="checkbox" onClick={handleChange} value={checked}></input>
        <label>only show products in stock</label>
      </div>
    </>
  );
}

export default SearchBar;
