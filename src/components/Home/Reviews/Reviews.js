import React from 'react';
import Review from '../Review/Review';
import './Reviews.css';
import customer1 from '../../../images/customer1.png'
import customer2 from '../../../images/customer2.jpg'
import customer3 from '../../../images/customer3.jpg'



const reviewsData = [
    {
        'quote': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        'name': 'Wilson Harry',
        'from': 'California',
        'img': customer1
    },
    {
        'quote': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        'name': 'Ema Gomez',
        'from': 'California',
        'img': customer2
    },
    {
        'quote': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        'name': 'Aliza Farari',
        'from': 'California',
        'img': customer3
    }
]

const Reviews = () => {
    return (
        <section className="reviews my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase text-center">Reviews</h5>
                    <h1 className="text-center">What Our Customers <br /> Says </h1>
                </div>
                <div className="card-deck mt-5 row d-flex justify-content-center">
                    {
                        reviewsData.map(review => <Review review={review} key={review.name}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;