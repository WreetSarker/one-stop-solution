import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link className="nav-link ms-5" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link ms-5 text-info" to="/myservices">My Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link ms-5 text-info" to="/dashboard">Admin</Link>
                        </li>

                        <li class="nav-item">
                            <Link className="nav-link ms-5 text-info" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default NavBar;