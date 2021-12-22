import React from 'react';
import Announcement from '../Components/Announcement.jsx';
import Categories from '../Components/Categories.jsx';
import Footer from '../Components/Footer.jsx';
import Navbar from '../Components/Navbar.jsx';
import Newsletter from '../Components/Newsletter.jsx';
import Products from '../Components/Products.jsx';
import Slider from '../Components/Slider.jsx';

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;