import React from 'react';
import carService from '../../../images/carService.jpg';
import mobileService from '../../../images/mobileService.png';
import fridgeService from '../../../images/fridgeRepair.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const servicesData = [
    {
        'name': 'Car Repairing',
        'cost': '$ 300',
        'image': carService,
    },
    {
        'name': 'Mobile Repairing',
        'cost': '$ 100',
        'image': mobileService,
    },
    {
        'name': 'Fridge Repairing',
        'cost': '$ 200',
        'image': fridgeService,
    },
]

const Services = () => {
    return (
        <section className="services-container">
            <div className="text-center">
                <h5 className="mt-5" style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2 className="mt-5 mb-5">Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;