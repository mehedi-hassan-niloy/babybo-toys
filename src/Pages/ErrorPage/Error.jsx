import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorLogo from './../../assets/gallery/error.gif'
import { Button } from 'react-bootstrap';
import useTitle from '../../Hooks/UseTitle';

const Error = () => {
    const { error, status } = useRouteError()
    useTitle('Error')
    return (
        <div>
            <div className='m-5 p-5'>
                <h1 className='d-flex justify-content-center align-items-center' >
                    <span>Error</span>
                </h1>
                <h1 className='d-flex justify-content-center align-items-center'>
                    {status || 404}
                </h1>
                <div className='d-flex justify-content-center align-items-center'>
                    <img className='w-25 h-25' src={errorLogo} alt="" />
                </div>
                <p className='d-flex justify-content-center align-items-center'>{error?.message}</p>
                <div className='d-flex justify-content-center align-items-center m-5'>
                    <Link to='/'><Button className='m-5 bg-info'>Back To Home</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;