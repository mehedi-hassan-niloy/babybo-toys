import { Button } from "react-bootstrap";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Navbars from "../Navbar/Navbars";
import Footer from "../Footer/Footer";
import useTitle from "../../Hooks/UseTitle";



const ToyDetails = () => {
     const alltoy = useLoaderData()
     useTitle('Toy Details')
    
     const { _id, toyName, sallerName, photo, email, price, ratting, category, quantity, details } = alltoy;
    return (
        <div className="container ">
            <Navbars/>
            <div className="card mb-3 bg-dark mx-auto mt-4" style={{ width: "700px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={photo} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-title text-white">Toy Name : {toyName}</p>
                            <p className="card-title text-white">Saller Name :{sallerName}</p>
                            <p className="card-title text-white">Quantity : {quantity}</p>
                            <p className="card-title text-white">Category : {category}</p>
                            <p className="card-text text-white">Details : {details }</p>
                            <p className="card-text text-white">Price : {price}</p>
                            
                            <p className="card-text text-white">Ratting: {ratting}</p>
                            <Link to={`order/${_id}`}><Button variant="info" className="w-100">Buy Toys</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/> 
        </div>
    );
};

export default ToyDetails;