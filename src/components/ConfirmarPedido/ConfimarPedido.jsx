import React from "react";
import { userInformations, deliveryInfo } from "../../Data/Data.js";

const ConfirmarPedido = () => {
  // Constante do produto
  const produto = {
    nome: "Shorts Duplo",
    preco: 120.5,
    quantidade: 2,
    imagem: "https://via.placeholder.com/120x180",
  };

  // Cálculo do preço final
  const precoFinal = (produto.preco * produto.quantidade).toFixed(2);

  return (
    <>
      <div className="flex justify-center min-h-screen py-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="bg-white dark:bg-gray-800 max-w-4xl w-full mx-auto p-6 shadow-lg rounded-lg">
          {/* Título */}
          <h1 className="text-2xl font-bold text-center mb-6">
            Revise e confirme
          </h1>
          {/* Valores */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Produto</span>
              <span>R$ {precoFinal}</span>
            </div>
            <div className="flex justify-between">
              <span>Frete</span>
              <span className="text-green-500">Grátis</span>
            </div>
          </div>
          {/* Total */}
          <div className="font-bold text-lg flex justify-between mb-6">
            <span>Você pagará</span>
            <span>R$ {precoFinal}</span>
          </div>
          {/* Botão de confirmação */}
          <button className="w-full bg-primary dark:bg-secondary text-white py-2 rounded-md font-medium hover:bg-primary/90 hover:dark:bg-secondary/90 transition-colors mb-6">
            Confirmar a compra
          </button>
          {/* Endereço de Entrega */}
          <div className="p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Escolha a forma de entrega
            </h2>
            <div className="border rounded-lg shadow p-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="delivery"
                  defaultChecked
                  className="mr-2 accent-primary dark:accent-secondary"
                />
                <div>
                  <p className="font-semibold">Enviar no meu endereço</p>
                  <p>
                    {userInformations.street} - {userInformations.neighborhood}
                  </p>
                  <span className="text-green-600 font-bold">
                    {deliveryInfo.free}
                  </span>
                </div>
              </label>
              <a
                href="/E1"
                className="text-primary dark:text-secondary block mt-4 text-sm"
              >
                Editar ou escolher outro endereço
              </a>
            </div>
          </div>
          {/* Produto e data */}
          <div className="p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Revise o produto</h2>
            <div className="border rounded-lg shadow p-4">
              {/* Imagem e detalhes do produto */}
              <div className="flex items-center">
                <img
                  src={produto.imagem}
                  alt="Produto"
                  className="w-32 h-auto rounded-md"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-1">{produto.nome}</h3>
                  <p className="text-sm">
                    Preço: R$ {produto.preco.toFixed(2)}
                  </p>
                  <p className="text-sm">Quantidade: {produto.quantidade}</p>
                  <p className="text-sm">Preço final: R$ {precoFinal}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Total Final */}
          <div className="p-4 rounded-md mb-6">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>R$ {precoFinal}</span>
            </div>
            <button className="w-full bg-primary dark:bg-secondary text-white py-2 rounded-md font-medium hover:bg-primary hover:dark:bg-secondary transition-colors mt-4">
              Confirmar a compra
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmarPedido;
