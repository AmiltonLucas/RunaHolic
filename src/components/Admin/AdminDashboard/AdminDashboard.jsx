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
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;
