import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firbase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (error || error1) {
        errorElement =
            <div>
                <p>Error: {error?.message} {error1?.message}</p>
            </div>

    }
    if (user || user1) {
        navigate('/home')
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
                <p className='mt-2 mx-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>
            </div>
            <p className='text-danger'>{errorElement}</p>
            <div><button onClick={() => signInWithGoogle()}
                className='bg-primary w-50 my-2'>
                <img src={google} alt="" />
                <span className='px-2'>  Google sign In</span>
            </button></div>
            <div><button className='bg-primary w-50 my-2 '>
                <img style={{ width: "30px" }} src={facebook} alt="" />
                <span className='px-2'>  facebook sign In</span>
            </button></div>
            <div><button onClick={() => signInWithGithub()}
                className='bg-primary w-50 '>
                <img src={github} alt="" />
                <span className='px-2'>  Github sign In</span>
            </button></div>
        </div>
    );
};

export default SocialLogin;