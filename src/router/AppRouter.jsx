import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/home/Home";
/* import Play from "../components/Movies/Play"; */

function AppRouter(){
    return(
        <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/Play' element={<h1>Pelicula seleccionada</h1>} />

            <Route path='/*' element={<Navigate to='/Home' />} />
        </Routes>
    )
}

export default AppRouter