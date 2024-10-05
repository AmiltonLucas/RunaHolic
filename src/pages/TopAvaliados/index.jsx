import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import OpcoesProdutos from "../../components/OpcoesProdutos/OpcoesProdutos";

const TopAvaliados = () => {
  return (
    <>
      <Navbar />
      <h1 className="p-[1rem] text-3xl text-center dark:text-white dark:bg-gray-900">
        Top Avaliados
      </h1>
      <OpcoesProdutos />
      <Footer />
    </>
  );
};

export default TopAvaliados;
