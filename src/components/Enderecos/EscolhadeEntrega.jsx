import React from "react";
import { userInformations, deliveryInfo } from "../../Data/Data.js";
import Navbar from "../NavBar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const EscolhadeEntrega = () => {
  return (
    <>
      <Navbar />
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-xl font-bold mb-4">Escolha a forma de entrega</h1>
        <div className="border rounded-lg shadow p-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="delivery"
              defaultChecked
              className="mr-2 accent-blue-600"
            />
            <div>
              <p className="font-semibold">Enviar no meu endereço</p>
              <p className="text-gray-500">
                {userInformations.street} - {userInformations.neighborhood}
              </p>
              <span className="text-green-600 font-bold">
                {deliveryInfo.free}
              </span>
            </div>
          </label>
          <a href="/E1" className="text-blue-600 block mt-4 text-sm">
            Editar ou escolher outro endereço
          </a>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <span className="text-green-600 font-bold">{deliveryInfo.free}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Continuar
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EscolhadeEntrega;
