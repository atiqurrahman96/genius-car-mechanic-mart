import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firbase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement =
            <div>
                <p>Error: {error?.message}</p>
            </div>

    }
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passRef.current.value;


        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = () => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address')
        }
    }
    return (
        <div className="container w-50 mx-auto">
            <h2 className="text-primary text-center">Please LogIn</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='w-50 ' variant="primary" type="submit">
                    Log In
                </Button>
                <p>   {errorElement}</p>
            </Form>
            <p>New to Genius car mart? <Link to="/register" className="text-primary pe-auto text-decoration-none" onClick={navigateRegister}>create an account</Link></p>
            <p>Forget Password ?<button className="btn btn-link text-primary pe-auto text-decoration-none" onClick={resetPassword}>Reset Password</button></p>

            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>

    );
};

export default Login; <h2>Please LogIn</h2>