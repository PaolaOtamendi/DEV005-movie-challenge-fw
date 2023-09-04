import { useEffect, useState } from 'react'
import './App.css'
import { obtenerPeliculas } from './Servicios/peticiones';


function App() {

  // Estado para almacenar las películas obtenidas de la API
  const [peliculas, setPeliculas] = useState([]);

/*   // Función para obtener las películas de la API
  const obtenerPeliculas = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    
    // Opciones para la solicitud HTTP
    const options = {
      method: 'GET', // Metodo (Verbo) HTTP
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzRhNGY5ZjgzMTQ0MzZjNmJjZDA5N2YxZmM4OTAyMyIsInN1YiI6IjY0ZWUyY2EwZTBjYTdmMDBjYmUzNzFiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9qxsVsWeO3vPFHiRZYW2319NaMtkdEfL0MqrjzuCDd8'
      }
    };

    try { // Promesa
      // Realiza una solicitud HTTP GET a la URL de la API con las opciones especificadas
      const response = await fetch(url, options); //fetch consume la api con la url y las opciones
      const data = await response.json();         // Convierte la respuesta en un objeto JSON
      console.log(data, 20);                      // Muestra los datos en la consola de la busqueda realizada con la respuesta en json
      setPeliculas(data.results);                 // Establece el estado "peliculas" con los resultados obtenidos de la API
    } catch (error) {                             // Devuelte la promesa error en caso de no cumplirse la solicitud
      console.error('Error:', error); 
    }
  }
 */
  
  // Efecto que se ejecuta cuando el componente se monta (una sola vez)
  useEffect(() => {
    obtenerPeliculas() // Llama la funcion obtenerPeliculas cuando el componente se monta
    .then(results => setPeliculas(results))
    .catch(error => console.error('Error', error));
  }, []);

  
  return (
    
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

export default App
