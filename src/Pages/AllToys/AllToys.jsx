import { useEffect, useState } from 'react';
import Toys from './Toys';
import Navbars from '../Navbar/Navbars';
import { Button, Form, Table } from 'react-bootstrap';
import useTitle from '../../Hooks/UseTitle';
import Footer from '../Footer/Footer';

const AllToys = () => {
    const [allToys, setToys] = useState([])
    const [searchToy, setSearchToy] = useState('');
    useTitle('All Toy')

    useEffect(() => {
        fetch(`https://babybo-toys-server.vercel.app/searchdata?search=${searchToy}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [searchToy])

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchToy(e.target.search.value)
    }

    return (
        <div>
            <Navbars />
            <div onSubmit={handleSearch} className="container">
                <Form className="d-flex w-25 mb-3 mt-2">
                    <input type="text" name="search" id="" className='me-2' />
                    <Button type='submit' variant="outline-info">Search</Button>
                </Form>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Saller Name</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Quantity</th>

                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(alltoy => <Toys
                                key={alltoy._id}
                                alltoy={alltoy}
                            />)
                        }
                    </tbody>
                </Table>
            </div>
            <Footer/>
        </div>
    );
};

export default AllToys;