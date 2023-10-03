import { Link } from "react-router-dom";
import "./header.css"
import logo from "../../assets/logo.png";

const Header = () => {
    return(
        <div className="containerheader">
            <div className="containerlogo">
            <div className="logo">
                <img src={logo} alt="" style={{ width: "68px", height: "auto" }}></img>
            </div>
            <div className="nameHeader">
                <p>CINEMA PLANET</p>
            </div>
            </div>
            {/* <div className="containerlink"> */}
            <div className="containerNavbar">
                <Link to='/Home' className="home">Home</Link>
                <Link to='/Populares' className="populares">Populares</Link>
                <Link to='/Estrenos' className="estrenos">Estrenos</Link>
            </div>
            {/* </div> */}
        </div>
    );
}

export default Header;