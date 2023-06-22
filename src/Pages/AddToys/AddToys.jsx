import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../Provider/AuthProvider';
import Navbars from '../Navbar/Navbars';
import Footer from '../Footer/Footer';
import Swal from 'sweetalert2';


const AddToys = () => {
    const { user } = useContext(AuthContext)
    const toyUpload = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.name.value
        const sallerName = form.sellername.value
        const photo = form.photo.value
        const email = user?.email
        const category = form.category.value
        const price = form.price.value
        const ratting = form.ratting.value
        const quantity = form.quantity.value
        const details = form.details.value
        // console.log(toyName, sallerName, photo, email, category, price, ratting)
        const uploadData = {
            toyName,
            sallerName,
            photo,
            email,
            category,
            price,
            ratting,
            quantity,
            details
        }
        console.log(uploadData)
        fetch("https://babybo-toys-server.vercel.app/addtoy", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(uploadData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire('Toy Added Successfully')
                }
            })



    }
    return (
        <div className='container'>
            <Navbars />
            <Form onSubmit={toyUpload} className='row mt-3 p-5 border border-info border-3 rounded bg-dark'>
                <Form.Group className="mb-3 col-12 col-lg-6  text-white" controlId="formBasicEmail">
                    <Form.Label>Toy Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-lg-6 text-white" controlId="formBasicEmail">
                    <Form.Label>Seller Name</Form.Label>
                    <Form.Control type="text" defaultValue={user?.displayName} name="sellername" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-lg-6 text-white" controlId="formBasicPassword">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="url" name="photo" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-lg-6 text-white" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" defaultValue={user?.email} name="email" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-lg-6 text-white" controlId="formBasicPassword">
                    <Form.Label>Sub-Category</Form.Label>
                    <Form.Control type="text" name="category" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-lg-6 text-white" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" name="price" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-lg-6 text-white" controlId="formBasicPassword">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="text" name="ratting" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-lg-6 text-white" controlId="formBasicPassword">
                    <Form.Label>Available quantity</Form.Label>
                    <Form.Control type="text" name="quantity" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3 col-12 text-white" controlId="formBasicPassword">
                    <Form.Label>Toy Details</Form.Label>
                    <Form.Control type="text" name="details" placeholder="" />
                </Form.Group>
                <Button className="w-100" variant="info" type="submit">
                   Add Toys
                </Button>


            </Form>
            <Footer/>
        </div>
    );
};

export default AddToys;