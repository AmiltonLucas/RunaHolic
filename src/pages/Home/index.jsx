import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import Hero from "../../Components/Hero/Hero";
import TopProducts from "../../Components/TopProducts/TopProducts";
import Banner from "../../Components/Banner/Banner";
import Products from "../../Components/Products/Products";
import ProductsMasculinos from "../../Components/Products/ProductsMasculinos";
import Avaliacoes from "../../Components/Avaliacoes/Avaliacoes";
import Footer from "../../Components/Footer/Footer";
import Popup from "../../Components/Popup/Popup";
import FullScreenBanner from "../../Components/HeaderBanner/HeaderBanner";

const Home = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <FullScreenBanner />
      <TopProducts />
      <Banner />
      <Products />
      <ProductsMasculinos />
      <Avaliacoes />
      <Footer />
      <Popup />
    </div>
  );
};

export default Home;
