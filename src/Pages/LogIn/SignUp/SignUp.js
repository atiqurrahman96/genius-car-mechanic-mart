import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import {
    useCreateUserWithEmailAndPassword, useUpdateProfile
} from 'react-firebase-hooks/auth';
import auth from '../../../firbase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../Shared/Loading/Loading';

const SignUp = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);

    const navigateLogIn = () => {
        navigate('/login');
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        console.log('user', user);
    }

    const handleSignUpSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')


    }
    return (
        <div className="register-form">
            <h2>Please Sign Up</h2>
            <form onSubmit={handleSignUpSubmit}>
                <input type="text" name="name" id="" placeholder="Enter your name" />
                <input type="email" name="email" id="" placeholder="Enter your email" required />
                <input type="password" name="password" id="" placeholder="Enter your password" required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Have you accepted all terms and conditions of us</label> */}
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Have you accepted all terms and conditions of us</label>
                <input
                    disabled={!agree}
                    type="submit" value="Sign Up" required />

            </form>
            <p>Already have an account? <Link to="/login" className="text-danger pe-auto text-decoration-none" onClick={navigateLogIn}>please Log In</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;