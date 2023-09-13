const MovieModal = ({ pelicula, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-20">
        <div className="modal-content w-96 p-4 mx-auto rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-semibold">
            {pelicula.title}
        </h2>
        <div className="w-3/4">
        <img src={`http://image.tmdb.org/t/p/w300/${pelicula.poster_path}`} alt={pelicula.title} />
        </div>
        <p>
            Fecha de Estreno: {pelicula.release_date}
        </p>
        <p className='averagemovie'>
        Calificación: {pelicula.vote_average} ⭐
        </p>
        <p className='descriptionmovie'>
        Descripción: {pelicula.overview}
        </p>
        <button onClick={onClose} className="mt-4 bg-purple-500 hover:bg-blue-700 text-black-800 font-bold py-2 px-4 rounded-lg">Cerrar ❌</button>
        </div>
        </div>
    );
};

export default MovieModal;
