import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://still-woodland-13455.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(resp => resp.json())
            .then(data => setIsAdmin(data))
    }, [])


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/myservices" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>My Services</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Write a Review</span>
                    </Link>
                </li>
                {isAdmin && <div>
                    <li>
                        <Link to="/allBoughtServices" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>All Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span>
                        </Link>
                    </li>

                </div>}
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;