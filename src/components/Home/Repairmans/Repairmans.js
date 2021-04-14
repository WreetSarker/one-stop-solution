import React from 'react';
import './Repairmans.css';
import rep1 from '../../../images/rep1.jpg'
import rep2 from '../../../images/rep2.jpg'
import rep3 from '../../../images/rep3.jpg'
import Repairman from '../Repairman/Repairman';


const repairmanData = [
    {
        'quote': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        'name': 'Wilson Harry',
        'from': 'California',
        'img': rep1
    },
    {
        'quote': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        'name': 'Raphael Marquez',
        'from': 'California',
        'img': rep2
    },
    {
        'quote': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        'name': 'Steve Jabbar',
        'from': 'California',
        'img': rep3
    }
]

const Repairmans = () => {
    return (
        <section className="repairman my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase text-center">Our Team</h5>
                    <h1 className="text-center">Have a Look at Our Team Members </h1>
                </div>
                <div className="card-deck mt-5 row d-flex justify-content-center">
                    {
                        repairmanData.map(rep => <Repairman rep={rep} key={rep.name}></Repairman>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Repairmans;