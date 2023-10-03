const MovieCard = ({ pelicula, onVerClick }) => {

    // Este componente recibe dos propiedades, pelicula y onVerClick, como argumentos.
    // pelicula: Es un objeto que representa los datos de una película.

    return(
    <div className="max-w-xs mx-2 my-4">
        <div className="w-3/4 w-full">
            <img src={`http://image.tmdb.org/t/p/w300/${pelicula.poster_path}`} alt={''} />
        </div>
        <div className='container-name'>
            <p className='font-sans'>{pelicula.title}</p>
        </div>
        <div className='container-year'>
            <p className='parrafo'>Fecha de Estreno: {pelicula.release_date}</p>
        </div>
        <div className='container-average'>
            <p className='parrafo'>{(pelicula.vote_average).toFixed(0)} ⭐</p>
        </div>
        <div className='container-play'>
            <button onClick={() => onVerClick(pelicula)} //Funcion onVerClick -> se ejecuta cuando se haga click en el boton {Abrir}
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
    );
}

export default MovieCard;