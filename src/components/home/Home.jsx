import React from 'react';
/* import { useEffect, useState } from 'react' */
import useObtenerPeliculas from '../../Servicios/peticiones';
import useObtenerGeneros from '../../Servicios/generos';



const Home = () => {
    // Estado para almacenar las películas obtenidas de la API
    /* const [peliculas, setPeliculas] = useState([]); */
    /* const [generos, setGeneros] = useState([]); */
    const peliculas = useObtenerPeliculas();

    const generos = useObtenerGeneros();
    console.log(generos, 45);

    // Efecto que se ejecuta cuando el componente se monta (una sola vez)
    /* useEffect(() => {
    obtenerPeliculas() // Llama la funcion obtenerPeliculas cuando el componente se monta
    .then(results => setPeliculas(results))
    .catch(error => console.error('Error', error));
    }, []); */


    return(
        <div>
        <div className='parrafo1'>
        {
            peliculas.map(pelicula => (
            <div key={pelicula.id}>
                <div className='container'>
                <img src={`http://image.tmdb.org/t/p/w300/${pelicula.poster_path}`} alt={''} />
                </div>
                <div className='container-data'>
                <p className='parrafo'>
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
                <div className='container-genero'>
                <p className='parrafo'>
                {generos[pelicula.genre_ids[0]]}
                </p>
                </div>
                <div className='container-year'>
                <p className='parrafo'>
                {pelicula.vote_average} ⭐
                </p>
                </div>
            </div>  
            ))
        }
        </div>
        </div>
    )
}

export default Home