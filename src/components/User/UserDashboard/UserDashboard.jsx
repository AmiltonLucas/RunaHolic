import React, { useState } from 'react';
import { FaUser, FaCog, FaLock, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa'; // Ícones
import Sidebar from '../UserSidebar/UserSidebar';

const user = {
  name: "Rafael Quintino",
  email: "rafaelquintinoamz@gmail.com",
  imageUrl: "https://via.placeholder.com/150", // Substitua por uma URL válida
};

const sections = [
  { name: "Dados pessoais", description: "Informações do seu documento de identidade e sua atividade econômica." },
  { name: "Dados da sua conta", description: "Dados que representam a conta no Mercado Livre e Mercado Pago." },
  { name: "Segurança", description: "Você tem configurações pendentes." },
  { name: "Cartões", description: "Cartões salvos na sua conta." },
  { name: "Endereços", description: "Endereços associados à sua conta." },
];

const sidebarItems = [
  { name: "Perfil", icon: FaUser },
  { name: "Configurações", icon: FaCog },
  { name: "Segurança", icon: FaLock },
  { name: "Sair", icon: FaSignOutAlt },
];

export default function UserDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo principal */}
      <main className={`flex-1 p-8 ${isSidebarOpen ? 'ml-42' : 'ml-16'} transition-all duration-300`}>
        {/* Informações do usuário */}
        <div className="flex items-center mb-8 bg-white p-6 shadow-md rounded-md">
          <img
            className="h-20 w-20 rounded-full"
            src={user.imageUrl}
            alt="User Avatar"
          />
          <div className="ml-2">
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* Seções */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-md hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-medium text-gray-800">{section.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{section.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
