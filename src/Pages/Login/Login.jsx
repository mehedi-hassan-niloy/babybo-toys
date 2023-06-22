
import { Link } from "react-router-dom";

import login from './../../assets/login/93385-login.gif'
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext, useState } from "react";
import GoogleSignUp from "./GoogleSignUp";
import useTitle from "../../Hooks/UseTitle";




const Login = () => {
    const [error, setError] = useState('')
   
    const { signIn, setLoadin } = useContext(AuthContext);
    useTitle('Login')
    
   

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
           if (password.length < 6) {
            setError('Password must ne 6 digit')
            return;

        }
        signIn(email, password)
            .then(result => {
                const logUser = result.user;
                setError('')
                setLoadin(false)
                form.reset()
            })
            .catch(error => {
                setError(error.message)
                setLoadin(false)

            })

    }
   

   
    
    return (
        <div>
           
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <img className="h-75 w-75" src={login} alt="" />
                    </div>
                    <div className="col-12 col-lg-6 ">

                      <div className="pt-5 p-5 border border-info border-3 rounded bg-dark">
                      <Form onSubmit={handelLogin}>
                            <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" />
                            </Form.Group>
                            <Button className="w-100" variant="outline-info" type="submit">Login</Button>
                           <p className="text-white">Babybo shop new <Link to='/signup'>SignUp</Link></p>
                           <p className='mb-4 text-danger'>{error}</p>
                           <GoogleSignUp/>
                        </Form>
                        
                      </div>

                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Login;