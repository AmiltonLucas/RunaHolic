function Sidebar() {
  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col">
      <div className="p-4 text-lg font-bold">Admin</div>
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-blue-700">Dashboard</li>
          <li className="p-4 hover:bg-blue-700">Usuários</li>
          <li className="p-4 hover:bg-blue-700">Relatórios</li>
          <li className="p-4 hover:bg-blue-700">Configurações</li>
        </ul>
      </nav>
      <div className="p-4">
        <button className="w-full bg-red-600 hover:bg-red-700 p-2 rounded">
          Sair
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
