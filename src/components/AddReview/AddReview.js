import React from 'react';
import { useState } from 'react';

const AddReview = () => {

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
        formData.append('from', info.from);
        formData.append('review', info.review);

        fetch('http://localhost:4000/addReview', {
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
                <h5 className="text-brand">Write a Review!</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">City</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="from" placeholder="Your City" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Review</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="review" placeholder="Your Review" />
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

export default AddReview;