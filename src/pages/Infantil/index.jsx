import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import OpcoesProdutos from "../../components/OpcoesProdutos/OpcoesProdutos"

const Infantil = () => {
  return (
    <>
      <Navbar />
      <h1 className="p-[1rem] text-3xl text-center dark:text-white dark:bg-gray-900">
        Espaço Infantil
      </h1>
      <OpcoesProdutos />
      <Footer />
    </>
  );
};

export default Infantil;
