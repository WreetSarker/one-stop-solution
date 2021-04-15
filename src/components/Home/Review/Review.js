import React from 'react';

const Review = ({ review }) => {

    return (
        <div className="card shadow-sm col-md-3 m-1">
            <div className="card-body">
                <p className="card-text text-center">{review.review}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={`data:image/png;base64,${review.image.img}`} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{review.name}</h6>
                    <p className="m-0">{review.from}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;