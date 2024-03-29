import React, { useEffect, useState } from 'react';
import ServicesList from '../ServicesList/ServicesList';
import Sidebar from '../Sidebar/Sidebar';

const AllServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://still-woodland-13455.herokuapp.com/allBoughtServices')
            .then(resp => resp.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <Sidebar></Sidebar>
            <div style={{ marginLeft: '500px' }}>
                <h2 className="text-brand text-center">All Services</h2>
                {
                    services.length ?
                        <ServicesList services={services}></ServicesList>
                        :
                        <div className="p-5">
                            <h4 className="lead text-center">No Services Bought Yet</h4>
                        </div>
                }
            </div>
        </div>
    );
};

export default AllServices;