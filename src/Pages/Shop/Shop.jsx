import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";





const Shop = ({product}) => {
    const {_id, toyName, photo, price, ratting} =product;
    
    return (
     <div className="col-12 col-lg-4 shadow-lg p-3 mb-5 bg-body rounded ">
       <Card className="h-100">
      <Card.Img className="h-75" variant="top" src={photo} />
      <Card.Body className="bg-dark">
        <Card.Title className="text-white">Toy Name : {toyName}</Card.Title>
        <Card.Text className="text-white">
         Price : {price}
        </Card.Text>
        <Card.Text className="text-white">
         Ratting : {ratting}
        </Card.Text>
        <Link to={`/details/${_id}`}><Button variant="info" className="w-100">View Details</Button></Link>
      </Card.Body>
    </Card>
     </div>
    );
};

export default Shop;