import React, { useState, useCallback } from 'react';
import _ from 'lodash';

const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  // Fungsi pencarian dengan debounce
  const handleSearch = useCallback(
    _.debounce((searchValue) => {
      if (searchValue.length > 0) {
        const filteredData = data.filter((item) =>
          item.toLowerCase().includes(searchValue.toLowerCase())
        );
        setResults(filteredData);
      } else {
        setResults([]);
      }
    }, 300), []
  );

  const handleChange = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    handleSearch(searchValue);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
