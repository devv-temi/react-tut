import React from "react";

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchItem" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="Search lists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
