// importações necessárias
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Sidebar from '../UserSidebar/UserSidebar';

export default function UserPessoalData() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Menu lateral */}
      <Sidebar />

      {/* Área principal */}
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-6 bg-white">
        <a href="/user" className='mb-5 flex gap-2'><FaArrowLeft /></a>
          <h1 className="text-3xl font-bold">Dados Pessoais</h1>
          <p className="mt-4">Aqui você pode alterar seus dados pessoais</p>
          {/* Coloque o conteúdo adicional da área principal aqui */}
        </main>
      </div>
    </div>
  );
}
