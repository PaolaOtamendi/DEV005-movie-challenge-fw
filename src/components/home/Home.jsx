import React from 'react';
import useObtenerPeliculas from '../../Servicios/peticiones';
import { useState } from 'react';
import MovieModal from '../Movies/Pelicula';
import MovieCard from '../moviecard/MovieCard';
import FilterMovies from '../filter/Filtro';


const Home = () => {
    const peliculas = useObtenerPeliculas();
    console.log(peliculas, 35);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleVerClick = (pelicula) => {
        setSelectedMovie(pelicula); // Establecer la película seleccionada
        setModalOpen(true); // Abrir el modal
    };

    const handleCloseModal = () => {
        setSelectedMovie(null); // Limpiar la película seleccionada
        setModalOpen(false); // Cerrar el modal
    };
    
    const handleFilter = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const filteredPeliculas = peliculas.filter((pelicula) =>
    pelicula.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
            <div style={{ backgroundColor: '#e6e6fa' }}>
                <FilterMovies onFilterChange={handleFilter} />

            <div className='container-movies 
                flex flex-wrap 
                justify-evenly 
                items-center
                mt-40
                w-full h-full' 
                style={{ backgroundColor: '#e6e6fa' }}>
                
                

                {filteredPeliculas/* peliculas */.map(pelicula => (
                <MovieCard key={pelicula.id} pelicula={pelicula} onVerClick={handleVerClick} />
                ))}
                
                {modalOpen && (
                <MovieModal pelicula={selectedMovie} onClose={handleCloseModal} />
                )}
            </div>
            </div>
        );
}

export default Home
