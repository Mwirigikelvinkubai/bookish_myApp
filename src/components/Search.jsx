import React from "react";

const Search = ({ query, setQuery }) => {
  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    console.log("user input query is:", newQuery);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-2 w-full max-w-md items-center">
        <label htmlFor="searchInput" className="text-lg mb-2 ">
          Search a book
        </label>
        <input
          id="searchInput"
          type="text"
          value={query}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg w-full max-w-md text-black"
          placeholder="Type to search books"
        />
      </div>
    </div>
  );
};

export default Search;
