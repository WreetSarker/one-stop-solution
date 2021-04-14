import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import Repairmans from '../Repairmans/Repairmans';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Reviews></Reviews>
            <Repairmans></Repairmans>
            <Footer></Footer>
        </div>
    );
};

export default Home;