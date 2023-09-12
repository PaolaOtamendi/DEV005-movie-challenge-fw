import useObtenerEstrenos from "../Servicios/estrenos";
import useObtenerGeneros from "../Servicios/generos";


const Estrenos = () => {
    const generos = useObtenerGeneros();
    console.log(generos, 45)

    const estrenos = useObtenerEstrenos();
    console.log(estrenos, 65);

    return(
        <div className='container-movies flex flex-wrap justify-evenly items-center mt-20'>
        {
        estrenos.map(estreno =>(
            <div key={estreno.id} className="max-w-xs mx-2 my-4">
                <div className="w-3/4 w-full">
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
                <button className=" 
                bg-green-400 
                text-black font-bold 
                px-4 py-2 
                border border-green-700 
                hover:bg-blue-700 
                focus:bg-blue-700">
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