import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';


const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams();
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/getSingleService/${id}`)
            .then(resp => resp.json())
            .then(data => {
                setItem(data[0]);
                const boughtService = {};
                boughtService.name = loggedInUser.name || loggedInUser.displayName;
                boughtService.date = new Date().toDateString('dd/MM/yyyy');
                boughtService.email = loggedInUser.email;
                boughtService.image = data[0].image;
                boughtService.serviceName = data[0].name;
                boughtService.cost = data[0].cost;
                setLoggedInUser(boughtService);
                fetch('http://localhost:4000/boughtService', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(boughtService)
                })
            })
    }, [])


    return (
        <div>
            <h1>Checkout</h1>
            <h3>Ordered Service: {item.name}</h3>
            <h4>Cost: {item.cost}</h4>
            <ProcessPayment></ProcessPayment>
            <Link to="/myservices"><button>CheckOut</button></Link>

        </div>
    );
};

export default CheckOut;