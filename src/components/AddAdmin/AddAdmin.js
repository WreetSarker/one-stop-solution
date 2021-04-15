import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddAdmin = () => {

    const [info, setInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData();

        formData.append('email', info.email);

        fetch('https://still-woodland-13455.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add an Admin </h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddAdmin;