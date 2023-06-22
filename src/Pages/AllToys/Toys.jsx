
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Toys = ({ alltoy }) => {
    const { _id, toyName, sallerName, photo, email, price, ratting, category, quantity, details } = alltoy;
    return (
                    <tr>
                        <td className='w-25'><img className='h-25 w-25' src={photo} alt="" /></td>
                        <td>{sallerName}</td>
                        <td>{toyName}</td>
                        <td>{price}</td>
                        <td>{category}</td>
                        <td>{quantity}</td>
                        <td> <Link to={`/details/${_id}`}><Button variant="info" className="w-100">View Details</Button></Link></td>
                    </tr>
    );
};

export default Toys;