import React, { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
    };

    return (
        <>
            <input
                type='text'
                value={searchTerm}
                onChange={handleSearch} />
        </>
    )
}

export default SearchBar;