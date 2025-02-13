import React from 'react'

const SearchBar = ({ searchValue, handleTextChange }) => {

    return (
        <input className="search-input-box" type="text" onChange={(e) => handleTextChange(e.target.value)} value={searchValue} placeholder="Search for countries..." />
    )
}

export default SearchBar