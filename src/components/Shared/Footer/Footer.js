import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faDribbble } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <h1 className="footer-subscription-heading">One Stop Solution</h1>
                <p className="footer-subscription-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta tempora quidem modi aliquid, voluptatibus non dicta. Minima, porro obcaecati.
                </p>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>COMPANY</h2>
                        <Link to="/home">About Us</Link>
                        <Link to="/home">Our Services</Link>
                        <Link to="/home">The Team</Link>
                        <Link to="/home">Investors</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>RESOURCES</h2>
                        <Link to="/home">News & Insight</Link>
                        <Link to="/home">Documentation</Link>
                        <Link to="/home">Downloads</Link>
                        <Link to="/home">Knowledge Base</Link>
                    </div>

                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>SUPPORT</h2>
                        <Link to="/home">Contact Us</Link>
                        <Link to="/home">FAQs</Link>
                        <Link to="/home">Live Chat</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>RESOURCES</h2>
                        <Link id="twitter" className="social-icon-link twitter" to="/home"><FontAwesomeIcon icon={faTwitter} /><span>Twitter</span> </Link>
                        <Link className="social-icon-link facebook" to="/home"><FontAwesomeIcon icon={faFacebook} /><span>Facebook</span> </Link>
                        <Link className="social-icon-link dribble" to="/home"><FontAwesomeIcon icon={faDribbble} /><span>Dribble</span> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;