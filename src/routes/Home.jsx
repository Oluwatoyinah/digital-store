import React from 'react';
import Ads from '../components/Ads/Ads';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Products from '../components/Products/Products';

const Home = () => {
  return (
    <div>
        <Header />
        <Features />
        <Products />
        <Ads />
        <Footer />
    </div>
  )
}

export default Home