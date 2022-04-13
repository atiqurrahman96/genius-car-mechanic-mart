import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
    const navigate = useNavigate();

    const navigateLogIn = () => {
        navigate('/login');
    }
    const handleSignUpSubmit = event => {
        event.preventDefault();
    }
    return (
        <div className="register-form">
            <h2>Please Sign Up</h2>
            <form onSubmit={handleSignUpSubmit}>
                <input type="text" name="name" id="" placeholder="Enter your name" />
                <input type="email" name="email" id="" placeholder="Enter your email" required />
                <input type="password" name="password" id="" placeholder="Enter your password" required />
                <input type="submit" value="Sign Up" required />
            </form>
            <p>Already have an account? <Link to="/login" className="text-danger pe-auto text-decoration-none" onClick={navigateLogIn}>please Log In</Link></p>
        </div>
    );
};

export default SignUp;