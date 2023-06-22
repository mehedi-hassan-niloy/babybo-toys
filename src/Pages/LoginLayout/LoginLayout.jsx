import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbars from "../Navbar/Navbars";


const LoginLayout = () => {
    return (
        <div>
            <Navbars/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default LoginLayout;