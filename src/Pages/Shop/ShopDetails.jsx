import { Outlet } from "react-router-dom";
import Navbars from "../Navbar/Navbars";
import Footer from "../Footer/Footer";


const ShopDetails = () => {
    return (
        <div>
            <Navbars/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default ShopDetails;