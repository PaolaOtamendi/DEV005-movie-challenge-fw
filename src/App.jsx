import { useEffect, useState } from 'react'
import './App.css'
/* const fetch = require('node-fetch'); */


function App() {

  const [peliculas, setPeliculas] = useState([]);

  const obtenerPeliculas = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzRhNGY5ZjgzMTQ0MzZjNmJjZDA5N2YxZmM4OTAyMyIsInN1YiI6IjY0ZWUyY2EwZTBjYTdmMDBjYmUzNzFiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9qxsVsWeO3vPFHiRZYW2319NaMtkdEfL0MqrjzuCDd8'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data, 20); // Muestra los datos en la consola de la busqueda realizada
      setPeliculas(data.results); // Establece los datos en el estado peliculas
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Llama a obtenerPeliculas cuando el componente se monta
  useEffect(() => {
    obtenerPeliculas();
  }, []);

  
  return (
    <>
    <div className='parrafo1'>
    {
      peliculas.map(pelicula => 
        <p key={pelicula.id} className='parrafo'>
          {pelicula.title}</p>
      )
    }
    </div>
    </>
  )
}

export default App
