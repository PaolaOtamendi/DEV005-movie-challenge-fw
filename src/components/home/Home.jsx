import React from 'react';
import { useEffect, useState } from 'react'
import { obtenerPeliculas } from '../../Servicios/peticiones';


function Home() {

    // Estado para almacenar las películas obtenidas de la API
    const [peliculas, setPeliculas] = useState([]);

    // Efecto que se ejecuta cuando el componente se monta (una sola vez)
    useEffect(() => {
    obtenerPeliculas() // Llama la funcion obtenerPeliculas cuando el componente se monta
    .then(results => setPeliculas(results))
    .catch(error => console.error('Error', error));
    }, []);


    return(
        <div className='parrafo1'>
        {
            peliculas.map(pelicula => (
            <div key={pelicula.id}>
                <img src={`http://image.tmdb.org/t/p/w300/${pelicula.poster_path}`} alt={''} />
                <p className='parrafo'>
                {pelicula.title}
                </p>
            </div>  
            ))
        }
        </div>
    )
}

export default Home