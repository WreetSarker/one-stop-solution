import React from 'react';

const ServicesList = ({ services }) => {


    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Service Name</th>
                    <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    services.map((service, index) =>

                        <tr>
                            <td>{service.name}</td>
                            <td>{service.serviceName}</td>
                            <td>{service.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default ServicesList;