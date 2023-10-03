import useObtenerEstrenos from "../Servicios/estrenos";
import MovieModal from "../components/Movies/Pelicula";
import { useState } from 'react';
import FilterMovies from "../components/filter/Filtro";


const Estrenos = () => {

    const estrenos = useObtenerEstrenos();
    console.log(estrenos, 65);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleVerClick = (estreno) => {
        setSelectedMovie(estreno); // Establecer la película seleccionada
        setModalOpen(true); // Abrir el modal
    };

    const handleFilter = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const filteredPeliculas = estrenos.filter((estreno) =>
    estreno.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return(
        <div style={{ backgroundColor: '#e6e6fa' }}>
            <FilterMovies onFilterChange={handleFilter} />

        <div className='container-movies 
        flex flex-wrap 
        justify-evenly 
        items-center 
        mt-40
        w-full h-full' 
        style={{ backgroundColor: '#e6e6fa' }}>
        
        {filteredPeliculas.map(estreno =>(
            <div key={estreno.id} className="max-w-xs mx-2 my-4">
                <div className="w-3/4 w-full">
                <img src={`http://image.tmdb.org/t/p/w300/${estreno.poster_path}`} alt={''} />
                </div>
                <div className='container-name'>
                <p className='parrafo'>
                {estreno.title}
                </p>
                </div>
                <div className='container-year'>
                <p className='parrafo'>
                Fecha de Estreno: {estreno.release_date}
                </p>
                </div>
                <div className='container-average'>
                <p className='parrafo'>
                {(estreno.vote_average).toFixed(0)} ⭐
                </p>
                </div>
                <div className='container-people'>
                <p className='parrafo'>
                {estreno.vote_count} 💚
                </p>
                </div>
                <div className='container-play'>
                <button onClick={() => handleVerClick(estreno)}
                className=" 
                bg-green-400 
                text-black font-bold 
                px-4 py-2 
                border border-green-700 
                hover:bg-blue-700 
                focus:bg-blue-700">
                Abrir ▶
                </button>
                </div>
            </div>
        ))
        }
        {modalOpen && (
        <MovieModal pelicula={selectedMovie} onClose={() => setModalOpen(false)} />
        )}
        </div>
        </div>
    );
}

export default Estrenos;