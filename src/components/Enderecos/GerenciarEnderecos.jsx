import React from "react";
import { userInformations }  from "../../Data/Data.js";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../NavBar/Navbar.jsx";

const GerenciarEnderecos = () => {
  return (
    <>
    <Navbar />
        <div className="p-4 max-w-md mx-auto">
          <h1 className="text-xl font-bold mb-4">Meus endereços</h1>
          <div className="border rounded-lg shadow p-4 mb-4">
            <label className="flex items-start">
              <input
                type="radio"
                name="address"
                defaultChecked
                className="mt-1 mr-2 accent-blue-600"
              />
              <div>
                <p className="font-semibold">{userInformations.street}</p>
                <p className="text-gray-500">
                  CEP {userInformations.zipCode} - {userInformations.neighborhood} -{" "}
                  {userInformations.city}, {userInformations.state}
                </p>
                <p className="text-gray-500">
                  {userInformations.name} - {userInformations.phone}
                </p>
                <a href="/E2" className="text-blue-600 text-sm block mt-2">
                  Editar
                </a>
              </div>
            </label>
          </div>
          <div className="border-dashed border-2 rounded-lg p-4 text-center">
            <a href="/E2" className="text-blue-600">
              + Adicionar endereço
            </a>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-6 w-full">
            Continuar
          </button>
        </div>
        <Footer />
    </>
  );
};

export default GerenciarEnderecos;
