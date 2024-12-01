// Importações necessárias
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      {/* Sidebar Fixa para telas maiores */}
      <aside className="hidden md:flex md:w-64 bg-gray-900 text-white flex-col min-h-screen">
        <div className="p-4 text-lg font-bold">Minha conta</div>
        <nav className="flex-1">
          <ul>
            <li className="p-4 hover:bg-gray-700">
              <Link to="/user/pessoal-data">Dados pessoais</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <Link to="/user/pedidos">Pedidos</Link>
            </li>
          </ul>
        </nav>
        <div className="p-4">
          <a href="/">
            <button className="w-full bg-red-600 hover:bg-red-700 p-2 rounded">
              Sair
            </button>
          </a>
        </div>
      </aside>

      {/* Botão de menu para telas menores */}
      <button
        className="md:hidden p-3 text-white bg-gray-900 rounded-full fixed top-1 left-1 z-50"
        onClick={toggleSidebar}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar Modal para telas menores */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay escuro */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleSidebar}
          ></div>

          {/* Modal Sidebar */}
          <div className="w-64 bg-gray-800 text-white flex flex-col z-50">
            <div className="p-4 text-lg font-bold flex justify-between items-center">
              Minha conta
              <button onClick={toggleSidebar}>
                <FaTimes size={20} />
              </button>
            </div>

            <nav className="flex-1">
              <ul>
                <li className="p-4 hover:bg-gray-700">
                  <Link to="/user/pessoal-data" onClick={toggleSidebar}>
                    Dados Pessoais
                  </Link>
                </li>
                <li className="p-4 hover:bg-gray-700">
                  <Link to="/user/pedidos" onClick={toggleSidebar}>
                    Pedidos
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="p-4">
              <a href="/" onClick={toggleSidebar}>
                <button className="w-full bg-red-600 hover:bg-red-700 p-2 rounded">
                  Sair
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
