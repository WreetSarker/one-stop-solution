import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{ height: '200px' }} src={service.image} alt="" />
            <h4 className="mt-5 mb-5">{service.name}</h4>
            <h6 className="mt-5 mb-5">{service.cost}</h6>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit error autem facilis recusandae esse? Aspernatur!</p>

        </div>
    );
};

export default ServiceDetail;