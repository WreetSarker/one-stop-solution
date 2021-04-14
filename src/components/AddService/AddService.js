import React from 'react';
import { useState } from 'react';

const AddService = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('cost', info.cost);

        fetch('http://localhost:4000/addService', {
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

            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Service</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Cost</label>
                        <input onBlur={handleBlur} type="cost" className="form-control" name="cost" placeholder="Cost" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;