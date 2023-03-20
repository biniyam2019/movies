import React, { useState } from "react";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [showInput, setShowInput] = useState(false);

  function handleSearchIconClick() {
    setShowInput(!showInput);
  }

  function handleInputChange(e) {
    setSearchInput(e.target.value);
  }

  return (
    <form>
      <i className='fa fa-search' onClick={handleSearchIconClick} />
      {showInput ? (
        <input
          type='text'
          placeholder='Search...'
          value={searchInput}
          onChange={handleInputChange}
          onBlur={() => setShowInput(false)}
        />
      ) : null}
    </form>
  );
}

export default SearchBar;
