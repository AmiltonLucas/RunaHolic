import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Hero from "../../components/Hero/Hero";
import Sobre from "../../components/Sobre/Sobre";
import TopProducts from "../../components/TopProducts/TopProducts";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Products/Products";
import ProductsMasculinos from "../../components/Products/ProductsMasculinos";
import Avaliacoes from "../../components/Avaliacoes/Avaliacoes";
import Footer from "../../components/Footer/Footer";
import Popup from "../../components/Popup/Popup";

const Home = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <Sobre />
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
