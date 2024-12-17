import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import ConfirmarPedido from "../../Components/ConfirmarPedido/ConfimarPedido";
import Footer from "../../Components/Footer/Footer";

const ConfirmarPedidoPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <ConfirmarPedido />
      <Footer />
    </div>
  );
};

export default ConfirmarPedidoPage;
