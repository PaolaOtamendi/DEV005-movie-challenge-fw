import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/home/Home";
import Header from "../components/header/Header";
import Pelicula from "../components/Movies/Pelicula";
import Estrenos from "../pages/Estrenos"
/* import Genero from "../pages/Genero" */
import Populares from "../pages/Populares"

const AppRouter = () => {
    return(
        <>
        <Header />
        <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/Pelicula' element={<Pelicula />} />
            <Route path='/Estrenos' element={<Estrenos />} />
            {/* <Route path='/Genero' element={<Genero />} /> */}
            <Route path='/Populares' element={<Populares />} />

            <Route path='/*' element={<Navigate to='/Home' />} />
        </Routes>
        </>
    )
}

export default AppRouter