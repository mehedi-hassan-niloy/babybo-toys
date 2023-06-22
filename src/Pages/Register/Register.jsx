
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import register from './../../assets/login/118046-lf20-oahmox5rjson.gif'
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../Hooks/UseTitle";


const Register = () => {
    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Register')
    const from = location.state?.from?.pathname || '/'
    // console.log(user)
    // console.log(createUser)
    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
       

        setError('')
        if (password.length < 6) {
            setError('your password must 6 digit')
            return;

        }

        createUser(email, password, name, photo)
            .then(result => {
                const createdUser = result.user;
                navigate(from, { replace: true })
               
            })
            .catch(error => {
                setError(error.message)
            })

    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <img className="h-75 w-75" src={register} alt="" />
                    </div>
                    <div className="col-12 col-lg-6">

                        <div className="pt-5 p-5 border border-info border-3 rounded bg-dark">
                            <Form onSubmit={handelRegister}>
                                <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Enter your Name" />
                                </Form.Group>
                                <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
                                    <Form.Label>Photo</Form.Label>
                                    <Form.Control type="text" name="photo" placeholder="Enter your Photo" />
                                </Form.Group>
                                <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter your Email" />
                                </Form.Group>
                                <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Enter your Password" />
                                </Form.Group>
                                <Button className="w-100" variant="primary" type="submit">
                                    Login
                                </Button>
                                <p className="text-white">You have an already acount<Link to='/login'>Login</Link></p>
                                <p className='mb-4 text-danger'>{error}</p>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;