import { useEffect, useState } from 'react'

// Función para obtener las películas de la API
const useObtenerEstrenos = () => {
    // Estado para almacenar las películas obtenidas de la API
    const [estrenos, setEstrenos] = useState([]);

    // Efecto que se ejecuta cuando el componente se monta (una sola vez)
    useEffect(() =>{
    const obtenerEstrenos = async () => {
        const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

    // Opciones para la solicitud HTTP
    const options = {
        method: 'GET', // Metodo (Verbo) HTTP
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzRhNGY5ZjgzMTQ0MzZjNmJjZDA5N2YxZmM4OTAyMyIsInN1YiI6IjY0ZWUyY2EwZTBjYTdmMDBjYmUzNzFiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9qxsVsWeO3vPFHiRZYW2319NaMtkdEfL0MqrjzuCDd8'
        },
    };

    try { // Promesa
        // Realiza una solicitud HTTP GET a la URL de la API con las opciones especificadas
        const response = await fetch(url, options); //fetch consume la api con la url y las opciones
        const data = await response.json();         // Convierte la respuesta en un objeto JSON 
        setEstrenos(data.results)                  // Establece el estado "peliculas" con los resultados obtenidos de la API
        /* console.log(data, 20); */                // Muestra los datos en la consola de la busqueda realizada con la respuesta en json              
        /* return data.results; */
    } catch (error) {                               // Devuelte la promesa error en caso de no cumplirse la solicitud
        console.error('Error:', error); 
    }
    };
    
    obtenerEstrenos();
    }, []);
    
    return estrenos // retornamos la data de la respuesta obtenida
}

export default useObtenerEstrenos;