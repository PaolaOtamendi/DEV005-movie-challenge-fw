import { useEffect, useState } from 'react'

// Función para obtener los generos de la API
const useObtenerGeneros = () => {
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
    const obtenerGeneros = async () => {
        const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

        const options = {
            method: 'GET', // Metodo (Verbo) HTTP
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzRhNGY5ZjgzMTQ0MzZjNmJjZDA5N2YxZmM4OTAyMyIsInN1YiI6IjY0ZWUyY2EwZTBjYTdmMDBjYmUzNzFiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9qxsVsWeO3vPFHiRZYW2319NaMtkdEfL0MqrjzuCDd8'
            },
        };

    try {
            const response = await fetch(url, options);
            const data = await response.json();
            setGeneros(data.genres);
        }  catch (error) {                          // Devuelte la promesa error en caso de no cumplirse la solicitud
            console.error('Error:', error); 
        }
        };
        
        obtenerGeneros();
    },[]);

        /* console.log(generos, 50);
        return generos; */

    const generosMapped = generos.map((genero) => `ID: ${genero.id}, Name: ${genero.name}`);

    /* console.log(generosMapped); */

    return generosMapped;
};

export default useObtenerGeneros;

{/* <p>Género: {generos[movie.genre_ids[0]]}</p> */}
/* const generosIdNombre = {};
for (const key in generosMap) {
    const genero = generosMap[key];
    generosIdNombre[genero.id] = genero.name;
  } */