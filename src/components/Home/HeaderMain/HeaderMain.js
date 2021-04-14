import React from 'react';
import carRepair from '../../../images/CarRepair.jpg'

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '3A4256' }}>One Place <br /> Repair Your Everything</h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consectetur culpa quam. Quibusdam, voluptatum cum?</p>
                <button className="btn btn-primary">Book A Slot</button>
            </div>
            <div className="col-md-6">
                <img src={carRepair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;