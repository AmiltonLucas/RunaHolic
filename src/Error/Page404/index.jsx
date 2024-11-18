import React from "react";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary/50 via-purple-600 to-secondary/50 text-gray-800">
      <div className="text-center">
        {/* Título com animação */}
        <h1 className="text-6xl font-extrabold text-white animate-bounce">
          404
        </h1>
        <p className="mt-4 text-2xl font-medium text-white">
          Oops! Página não encontrada.
        </p>
        <p className="mt-2 text-gray-200">
          Parece que a página que você está procurando não existe ou foi
          removida.
        </p>
        {/* Botão com animação de escala */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg text-lg font-medium hover:bg-gray-100 hover:scale-105 transform transition duration-300"
        >
          Voltar para a Página Inicial
        </button>
      </div>
    </div>
  );
}
