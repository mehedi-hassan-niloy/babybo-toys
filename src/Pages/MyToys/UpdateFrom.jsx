import React from 'react';
import Navbars from '../Navbar/Navbars';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useTitle from '../../Hooks/UseTitle';
import Swal from 'sweetalert2';
import Footer from '../Footer/Footer';

const UpdateFrom = () => {
    const {id} = useParams()
    useTitle('Update Toy')
    const updateTOy = (event) => {
        event.preventDefault();
        const form = event.target;
        
        const price = form.price.value
        const quantity = form.quantity.value
        const details = form.details.value
        // console.log(toyName, sallerName, photo, email, category, price, ratting)
        const uploadData = {
            price,
            quantity,
            details
        }
        
        console.log(uploadData)
        fetch(`https://babybo-toys-server.vercel.app/addtoy/${id}`, {
            method: "PATCH",
            headers:{
                "content-type": "application/json"
             },
             body:JSON.stringify(uploadData)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire('Toy Update Successfully')
            }
        })
    }
    return (
        <div className='container'>
            <Navbars/>
            <Form onSubmit={updateTOy} className='row mt-3 p-5 border border-info border-3 rounded bg-dark'>
                <Form.Group className="mb-3 col-12 col-lg-6 text-white" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" name="price" placeholder="" />
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
                    UploadToys
                </Button>
            </Form>
            <Footer/>
        </div>
    );
};

export default UpdateFrom;