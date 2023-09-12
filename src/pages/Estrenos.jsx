import useObtenerEstrenos from "../Servicios/estrenos";
import useObtenerGeneros from "../Servicios/generos";


const Estrenos = () => {
    const generos = useObtenerGeneros();
    console.log(generos, 45)

    const estrenos = useObtenerEstrenos();
    console.log(estrenos, 65);

    return(
        <div className='container-movies flex flex-wrap justify-center items-center mt-20 ml-30'>
        {
        estrenos.map(estreno =>(
            <div key={estreno.id}>
                <div className='w-3/4'>
                <img src={`http://image.tmdb.org/t/p/w300/${estreno.poster_path}`} alt={''} />
                </div>
                <div className='container-name'>
                <p className='parrafo'>
                {estreno.title}
                </p>
                </div>
                <div className='container-year'>
                <p className='parrafo'>
                Fecha de Estreno: {estreno.release_date}
                </p>
                </div>
                <div className='container-genero'>
                <p className='parrafo'>
                {generos[estreno.genre_ids[0]]}
                </p>
                </div>
                <div className='container-average'>
                <p className='parrafo'>
                {(estreno.vote_average).toFixed(0)} ⭐
                </p>
                </div>
                <div className='container-people'>
                <p className='parrafo'>
                {estreno.vote_count} 💚
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

export default Estrenos;