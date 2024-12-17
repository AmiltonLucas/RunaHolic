import React from "react";
import { userInformations }  from "../../Data/Data.js";
import Navbar from "../NavBar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const AdicionarEndereco = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <div className="p-4 max-w-md mx-auto ">
          <h1 className="text-xl font-bold mb-4">Adicione um endereço</h1>
          <form className="space-y-4">
            <div>
              <label className="block">Nome completo</label>
              <input
                type="text"
                defaultValue={userInformations.name}
                className="border rounded w-full p-2 text-gray-900"
              />
            </div>
            <div>
              <label className="block">CEP</label>
              <input
                type="text"
                defaultValue={userInformations.zipCode}
                className="border rounded w-full p-2 text-gray-900"
              />
            </div>
            <div>
              <label className="block">Estado</label>
              <input
                type="text"
                defaultValue={userInformations.state}
                className="border rounded w-full p-2 text-gray-900"
              />
            </div>
            <div>
              <label className="block">Cidade</label>
              <input
                type="text"
                defaultValue={userInformations.city}
                className="border rounded w-full p-2 text-gray-900"
              />
            </div>
            <div>
              <label className="block">Bairro</label>
              <input
                type="text"
                defaultValue={userInformations.neighborhood}
                className="border rounded w-full p-2 text-gray-900"
              />
            </div>
            <div>
              <label className="block">Rua/Avenida</label>
              <input
                type="text"
                defaultValue={userInformations.street}
                className="border rounded w-full p-2 text-gray-900"
              />
            </div>
            <button
              type="submit"
              className="bg-primary dark:bg-secondary text-white w-full px-4 py-2 rounded"
            >
              Salvar endereço
            </button>
          </form>
        </div>
        <Footer />
    </div>
  );
};

export default AdicionarEndereco;
