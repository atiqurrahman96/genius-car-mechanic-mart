import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const navigateToDetails = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>price:{price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToDetails(id)} className='btn btn-primary'>BooK:{name}</button>
        </div>
    );
};

export default Service;