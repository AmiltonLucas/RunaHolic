import React from "react";

export default function TestPage() {
  return (
    <div className="flex flex-wrap md:flex-nowrap bg-gray-900">
      {/* Seção da imagem grande à esquerda */}
      <div className="flex-1">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Novidades da Semana"
          className="w-[100%] h-[100vh] object-cover"
        />
      </div>

      {/* Seção da imagem horizontal e texto à direita */}
      <div className="flex-1 flex flex-col justify-between p-4 mt-20 -translate-x-20">
        {/* Imagem horizontal */}
        <div className="w-full">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Essenciais para o Verão"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>

        {/* Texto */}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold text-gray-50">
            Novidades da Semana
          </h2>
          <p className="text-gray-50 mt-2">Essenciais para o verão!</p>
          <button className="mt-4 px-6 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition">
            Alto Verão
          </button>
        </div>
      </div>
    </div>
  );
}
