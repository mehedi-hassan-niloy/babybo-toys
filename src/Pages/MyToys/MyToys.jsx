import { useContext, useEffect,  useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Table } from 'react-bootstrap';
import ToyTable from './ToyTable';
import Navbars from '../Navbar/Navbars';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/UseTitle';
import Footer from '../Footer/Footer';
0.

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    useTitle('My Toys')
    const url = `https://babybo-toys-server.vercel.app/shopData?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

    const handelDelete = id =>{
        const proceed =confirm('are you sure want to delete')
        
        if(proceed){
            fetch(`https://babybo-toys-server.vercel.app/shopData/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire('Delete Succses')
                    const remaining = myToys.filter(myToys => myToys._id !== id);
                    setMyToys(remaining)
                }
            })
        }
    }

    return (
         
        <div>
            <Navbars/>
            <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Toy Name</th>
                    <th>Saller Name</th>
                    <th>Email</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Details</th>
                    <th>Ratting</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
            </thead>

            {
                myToys.map(myToy => <ToyTable
                    key={myToy._id}
                    myToy={myToy}
                    handelDelete={handelDelete}
                />)
            }

        </Table>
        <Footer></Footer>
        </div>

    );
};

export default MyToys;
