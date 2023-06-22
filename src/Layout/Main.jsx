import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Gallerys from "../Pages/Gallery/Gallerys";
import About from "../Pages/About/About";
import ShipingAbout from "../Pages/ShipingAbout/ShipingAbout";
import Footer from "../Pages/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Home/>
            <Gallerys/>
            <Outlet/>
            <About/>
            <ShipingAbout/>
            <Footer/>
        </div>
    );
};

export default Main;