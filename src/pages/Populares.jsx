import useObtenerPopulares from "../Servicios/populares";
import useObtenerGeneros from "../Servicios/generos";

const Populares = () => {
    const populares = useObtenerPopulares();
    console.log(populares, 55);

    const generos = useObtenerGeneros();
    console.log(generos, 45)

    return(
        <div className='container-movies flex flex-wrap justify-evenly items-center mt-20'>
        {
        populares.map(popular =>(
            <div key={popular.id} className="max-w-xs mx-2 my-4">
                <div className="w-3/4 w-full">
                <img src={`http://image.tmdb.org/t/p/w300/${popular.poster_path}`} alt={''} />
                </div>
                <div className='container-name'>
                <p className='parrafo'>
                {popular.title}
                </p>
                </div>
                <div className='container-year'>
                <p className='parrafo'>
                Fecha de Estreno: {popular.release_date}
                </p>
                </div>
                <div className='container-genero'>
                <p className='parrafo'>
                {generos[popular.genre_ids[0]]}
                </p>
                </div>
                <div className='container-average'>
                <p className='parrafo'>
                {(popular.vote_average).toFixed(0)} ⭐
                </p>
                </div>
                <div className='container-people'>
                <p className='parrafo'>
                {popular.vote_count} 💚
                </p>
                </div>
                <div className='container-play'>
                <button>
                Ver ▶
                </button>
                </div>
            </div>
        ))
        }
        </div>
    )
};

export default Populares;