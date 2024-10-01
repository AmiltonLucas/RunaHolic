// Importações necessárias
import React from 'react';
import Sidebar from '../AdminSidebar/AdminSidebar';
import { FaArrowLeft } from "react-icons/fa";

function AdminConfig() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Menu lateral */}
      <Sidebar />

      {/* Área principal */}
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-6 bg-white">
          <a href="/admin" className='mb-5 flex gap-2'><FaArrowLeft /></a>
          <h1 className="text-3xl font-bold">Configurações</h1>
          <p className="mt-4">Aqui você pode gerenciar suas configurações.</p>
          {/* Coloque o conteúdo adicional da área principal aqui */}
        </main>
      </div>
    </div>
  );
}

export default AdminConfig;