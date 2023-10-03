import React, { useState } from 'react';

const FilterMovies = ({ onFilterChange }) => {
    const [searchMovie, setSearchMovie] = useState('');

    const handleSearchChange = (e) => {
        const searchItem = (e.target.value);
        setSearchMovie(searchItem);
        onFilterChange(searchItem);
    };

    return(
        <div className="fixed top-0 left-0 w-full p-4 mt-20 backdrop-blur-md"
        style={{ backgroundColor: '#7DFF68 backdrop-blur-md'}}>
            <p className="font-semibold mb-2">🔍 Busca tu pelicula favorita</p>
            <input
            type='text'
            placeholder=' Nombre de pelicula'
            value={searchMovie}
            onChange={handleSearchChange}
            className="p-2 border border-green-400 rounded-lg w-full">
            </input>
        </div>
    );
};

export default FilterMovies;