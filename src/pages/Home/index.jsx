import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import TopProducts from "../../components/TopProducts/TopProducts";
import Banner from "../../components/Banner/Banner";
import Testimonials from "../../components/TestimonialData/TestimonialData";
import Footer from "../../components/Footer/Footer";
import Popup from "../../components/Popup/Popup";
import Sobre from "../../components/Sobre/Sobre";

const Home = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <Sobre />
      <TopProducts />
      <Banner />
      <Products />
      <Testimonials />
      <Footer />
      <Popup />
    </div>
  );
};

export default Home;
