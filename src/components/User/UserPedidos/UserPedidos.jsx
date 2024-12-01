import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "../UserSidebar/UserSidebar";

export default function UserPedidos() {
  const navigate = useNavigate();

  const orders = [
    {
      id: "12345",
      image: "https://via.placeholder.com/80",
      productName: "Produto Exemplo",
      price: "R$100,00",
      purchaseDate: "01/12/2024",
      deliveryDate: "05/12/2024",
      status: "Entregue",
      paymentMethod: "Cartão de Crédito",
    },
    {
      id: "67890",
      image: "https://via.placeholder.com/80",
      productName: "Outro Produto",
      price: "R$250,00",
      purchaseDate: "15/11/2024",
      deliveryDate: "20/11/2024",
      status: "Em trânsito",
      paymentMethod: "Pix",
    },
  ];

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Menu lateral */}
      <Sidebar />

      {/* Área principal */}
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-6 bg-white">
          <a href="/user" className="mb-5 flex gap-2">
            <FaArrowLeft /> Voltar
          </a>
          <h1 className="text-3xl font-bold">Seus Pedidos</h1>
          <p className="mt-4">Aqui você pode ver seus pedidos</p>

          {/* Tabela para dispositivos menores */}
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Tabela de Pedidos</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border border-gray-300 p-4 bg-gray-50 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={order.image}
                      alt={order.productName}
                      className="h-16 w-16 object-cover cursor-pointer"
                      onClick={() => handleProductClick(order.id)}
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {order.productName}
                      </h3>
                      <p className="text-gray-600">{order.price}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700">
                    <p><strong>Compra:</strong> {order.purchaseDate}</p>
                    <p><strong>Entrega:</strong> {order.deliveryDate}</p>
                    <p><strong>Status:</strong> {order.status}</p>
                    <p><strong>Pagamento:</strong> {order.paymentMethod}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}