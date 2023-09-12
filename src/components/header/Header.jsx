import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="containerheader">
            <div className="logo">
                <h3>LOGO</h3>
            </div>
            <div className="nameHeader">
                <p>CINEMA PLANET</p>
            </div>
            <div className="search">
                <input className="searchname"
                placeholder="Nombre de pelicula"
                ></input>
            </div>
            <div className="containerNavbar">
                <Link to='/Home'>Home</Link>
                <Link to='/Genero'>Genero</Link>
                <Link to='/Populares'>Populares</Link>
                <Link to='/Estrenos'>Estrenos</Link>
            </div>
        </div>
    );
}

export default Header;