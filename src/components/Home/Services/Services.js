import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { useState } from 'react';
import { useEffect } from 'react';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://still-woodland-13455.herokuapp.com/services')
            .then(resp => resp.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="services-container">
            <div className="text-center">
                <h5 className="mt-5" style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2 className="mt-5 mb-5">Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        services.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;