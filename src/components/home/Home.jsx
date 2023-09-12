import React from 'react';
import useObtenerPeliculas from '../../Servicios/peticiones';
import useObtenerGeneros from '../../Servicios/generos';




const Home = () => {
    const peliculas = useObtenerPeliculas();
    console.log(peliculas, 35);

    const generos = useObtenerGeneros();
    console.log(generos, 45);


    return(
        
        <div className='container-movies flex flex-wrap justify-evenly items-center mt-20'>
        {
            peliculas.map(pelicula => (
            <div key={pelicula.id} className="max-w-xs mx-2 my-4">
                <div className="w-3/4 w-full">
                <img src={`http://image.tmdb.org/t/p/w300/${pelicula.poster_path}`} alt={''} />
                </div>
                <div className='container-name'>
                <p className='font-sans'>
                {pelicula.title}
                </p>
                </div>
                <div className='container-year'>
                <p className='parrafo'>
                Fecha de Estreno: {pelicula.release_date}
                </p>
                </div>
                {/* <div className='container-generos'>
                <p className='parrafo'>
                Generos: {pelicula.genre_ids}
                </p>  
                </div> */}
                {/* <div className='container-genero'>
                <p className='parrafo'>
                {generos[pelicula.genre_ids[0]]}
                </p>
                </div> */}
                <div className='container-average'>
                <p className='parrafo'>
                {(pelicula.vote_average).toFixed(0)} ⭐
                </p>
                </div>
                <div className='container-play'>
                <button 
                className=" 
                bg-green-400 
                text-black font-bold 
                px-4 py-2 
                border border-green-700 
                hover:bg-blue-700 
                focus:bg-blue-700">
                Ver ▶
                </button>
                </div>
            </div>  
            ))
        }
        </div>
        
    )
}

export default Home