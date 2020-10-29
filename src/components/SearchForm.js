import React, { useState } from 'react'
import { useGlobalContext } from '../utils/context'

function SearchForm() {
  const { setQuery } = useGlobalContext();
  const [inputValue, setInputValue] = useState('');

  const handleInputSearch = event => {
    setInputValue(event.target.value);
  }

  const handleSubmitSearch = event => {
    event.preventDefault();
    setQuery(inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmitSearch} className="search__form">
      <input
        className="search__bar"
        placeholder="Search your favorite recipe"
        type="text"
        value={inputValue}
        onChange={handleInputSearch}
      />
      <button className="button search__button" type="submit">Search</button>
    </form>
  )
}

export default SearchForm;