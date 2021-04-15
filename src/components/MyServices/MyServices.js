import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import BoughtService from '../BoughtService/BoughtService';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const MyServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [boughtServices, setBoughtServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/getBoughtServices?email=' + loggedInUser.email)
            .then(resp => resp.json())
            .then(data => setBoughtServices(data))
    }, [])

    return (
        <div>
            <Sidebar></Sidebar>
            <div style={{ marginLeft: '400px' }}>
                <h1>These are {loggedInUser.displayName || loggedInUser.name}'s products</h1>
                {
                    boughtServices.map(service => <BoughtService service={service}></BoughtService>)
                }
            </div>
        </div>
    );
};

export default MyServices;