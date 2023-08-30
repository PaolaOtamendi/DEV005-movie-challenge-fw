/* import axios from 'axios';

const apiKey = '134a4f9f8314436c6bcd097f1fc89023';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
/* const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`; */


/* axios.get(apiUrl)
  .then(response => {
    // Manipula los datos de respuesta aquí
    console.log(response.data);
  })
  .catch(error => {
    // Maneja los errores aquí
    console.error('Error:', error);
  });  */

  const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzRhNGY5ZjgzMTQ0MzZjNmJjZDA5N2YxZmM4OTAyMyIsInN1YiI6IjY0ZWUyY2EwZTBjYTdmMDBjYmUzNzFiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9qxsVsWeO3vPFHiRZYW2319NaMtkdEfL0MqrjzuCDd8'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));