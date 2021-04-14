import React from 'react';

const BoughtService = ({ service }) => {
    return (
        <div className="orders-holder">
            <div className="img-container">
                <img src={`data:image/png;base64,${service.image.img}`} alt="" />
            </div>
            <div className="info">
                <h3>Service Name: {service.serviceName}</h3>
                {/* <h4>Order Placed on: {service.date}</h4> */}

            </div>
        </div>
    );
};

export default BoughtService;