// importações necessárias
import React from "react";
import Sidebar from "../AdminSidebar/AdminSidebar";

function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Menu lateral */}
      <Sidebar />

      {/* Área principal */}
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-6 bg-white">
          <h2>Admin Dashboard</h2>
          {/* Coloque o conteúdo adicional da área principal aqui */}
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
