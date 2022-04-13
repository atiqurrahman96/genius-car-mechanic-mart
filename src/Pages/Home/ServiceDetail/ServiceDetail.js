import React from 'react';
import { Link, useParams } from 'react-router-dom';


const ServiceDetail = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h2>
                Welcome to the service detail:{serviceId}
                <div className='text-center'>
                    <Link to="/checkout">
                        <button className='btn btn-primary'>Proced checkout</button>
                    </Link>
                </div>
            </h2>
        </div>
    );
};

export default ServiceDetail;