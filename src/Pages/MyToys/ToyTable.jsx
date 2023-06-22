import { Button, CloseButton } from "react-bootstrap";
import { Link } from "react-router-dom";


const ToyTable = ({myToy, handelDelete}) => {
    const {_id, toyName, sallerName, photo, email, price, ratting, category,quantity, details } = myToy;


  
    
     return (
       
          
         <tbody>
                <tr>
                <td className='w-25'><img className='h-25 w-25' src={photo} alt="" /></td>
                <td>{toyName}</td>
                <td>{sallerName}</td>
                <td>{email}</td>
                <td>{price}</td>
                <td>{category}</td>
                <td>{quantity}</td>
                <td>{details}</td>
                <td>{ratting}</td>
                <td><CloseButton onClick={()=>handelDelete(_id)} aria-label="Hide" /></td>
                <td><Link className="" to={`/update/${myToy._id}`}><Button className="bg-info">Update</Button></Link></td>
                </tr>
            
                </tbody>
        
    ); 
};

export default ToyTable;