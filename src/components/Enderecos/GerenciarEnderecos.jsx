import React from "react";
import { userInformations } from "../../Data/Data.js";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../NavBar/Navbar.jsx";

const GerenciarEnderecos = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="p-4 max-w-md mx-auto">
          <h1 className="text-xl font-bold mb-4">Meus endereços</h1>
          <div className="border rounded-lg shadow p-4 mb-4">
            <label className="flex items-start">
              <input
                type="radio"
                name="address"
                defaultChecked
                className="mt-1 mr-2 accent-primary dark:accent-secondary"
              />
              <div>
                <p className="font-semibold">{userInformations.street}</p>
                <p>
                  CEP {userInformations.zipCode} -{" "}
                  {userInformations.neighborhood} - {userInformations.city},{" "}
                  {userInformations.state}
                </p>
                <p>
                  {userInformations.name} - {userInformations.phone}
                </p>
                <a
                  href="/E2"
                  className="text-primary dark:text-secondary text-sm block mt-2"
                >
                  Editar
                </a>
              </div>
            </label>
          </div>
          <div className="border-dashed border-2 rounded-lg p-4 text-center">
            <a href="/E2" className="text-primary dark:text-secondary">
              + Adicionar endereço
            </a>
          </div>
          <button className="bg-primary dark:bg-secondary text-white px-4 py-2 rounded mt-6 w-full">
            Continuar
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GerenciarEnderecos;
