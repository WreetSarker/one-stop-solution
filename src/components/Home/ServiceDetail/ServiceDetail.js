import React from 'react';
import { useHistory } from 'react-router';

const ServiceDetail = ({ service }) => {

    const history = useHistory();
    const handleAddProduct = (id) => {
        const url = `/checkout/${id}`;
        history.push(url);
    }

    return (
        <div className="col-md-4 text-center">
            <img style={{ height: '200px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
            <h4 className="mt-5 mb-5">{service.name}</h4>
            <h6 className="mt-5 mb-5">${service.cost}</h6>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit error autem facilis recusandae esse? Aspernatur!</p>
            <button onClick={() => handleAddProduct(service._id)} className="btn btn-primary">Book Now</button>

        </div>
    );
};

export default ServiceDetail;