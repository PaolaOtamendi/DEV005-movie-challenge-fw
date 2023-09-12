import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {
    return(
        <div className="containerheader">
            <div className="logo">
                <img src={""} alt={""}></img>
            </div>
            <div className="nameHeader">
                <p>CINEMA PLANET</p>
            </div>
            <div className="search">
                <p>Coloca el nombre de la pelicula</p>
                <input className="searchname"
                placeholder="Nombre de pelicula"
                ></input>
            </div>
            <div className="containerNavbar">
                <Link to='/Home' className="home">Home</Link>
                <Link to='/Genero' className="genero">Genero</Link>
                <Link to='/Populares' className="populares">Populares</Link>
                <Link to='/Estrenos' className="estrenos">Estrenos</Link>
            </div>
        </div>
    );
}

export default Header;