// importações necessárias
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col">
      <div className="p-4 text-lg font-bold">
        Admin
      </div>
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-blue-700">
            <Link to="/admin/cadastro-produtos">Cadastrar Produtos</Link>
          </li>
          <li className="p-4 hover:bg-blue-700">
            <Link to="/admin/cadastro-eventos">Cadastrar Eventos</Link>
          </li>
          <li className="p-4 hover:bg-blue-700">
            <Link to="/admin/config">Configurações</Link>
          </li>
          <li className="p-4 hover:bg-blue-700">
            <Link to="/admin/relatorios">Relatórios</Link>
          </li>
          <li className="p-4 hover:bg-blue-700">
            <Link to="/admin/users">Usuários</Link>
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
    </div>
  );
}

export default Sidebar;
