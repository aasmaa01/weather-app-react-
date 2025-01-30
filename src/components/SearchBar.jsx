import React from 'react';

const SearchBar = ({ setCity }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    setCity(city);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input type="text" name="city" placeholder="Enter your city" />
        <button type="submit">
          <img src="/images&icons/icons8-search-50.png" alt="Search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;