import { XIcon } from "lucide-react";
import React, { useState } from "react";

function TestPage() {
  const [selected, setSelected] = useState(false); // Estado para controle de seleção
  return (
    <div className="border border-gray-300 p-4 max-w-md mx-auto">
      {/* Título do Pedido */}
      <div className="text-sm font-bold mb-2">Pedido N 26</div>

      {/* Imagem e detalhes do produto */}
      <div className="flex">
        <img
          src="https://via.placeholder.com/120x180"
          alt="Produto"
          className="w-32 h-auto"
        />
        <div className="ml-4">
          <h1 className="text-xl font-bold mb-1">Shorts Duplo</h1>
          <p className="text-sm">Preço:</p>
          <p className="text-sm">Quantidade:</p>
          <p className="text-sm">Preço final:</p>
          <p className="text-sm">Data da compra:</p>
        </div>
      </div>

      {/* Endereço de Entrega */}
      <div className="mt-4">
        <h2 className="font-bold mb-1">Endereços de entrega</h2>
        <div className="grid grid-cols-2 gap-y-1 text-sm">
          <div>
            <p>Rua:</p>
            <p>Cidade:</p>
            <p>Cep:</p>
            <p>Telefone:</p>
          </div>
          <div>
            <p>Bairro:</p>
            <p>Estado:</p>
            <p>Nome:</p>
          </div>
        </div>
      </div>

      <h2 className="font-semibold mb-2">CÃOMINHADA</h2>
      <div className="flex items-center justify-between">
        <span>R$ 99,00</span>

        {/* Botão de Seleção */}
        <div className="flex items-center">
          {!selected ? (
            // Botão Selecionar
            <button
              onClick={() => setSelected(true)} // Ativa o botão selecionado
              className="bg-primary text-white px-4 py-2 rounded-md"
            >
              Selecionar
            </button>
          ) : (
            // Exibição do X para cancelar
            <div className="flex items-center">
              <span className="text-primary font-semibold mr-2">
                Selecionado
              </span>
              <button
                onClick={() => setSelected(false)} // Cancela a seleção
                className="bg-red-500 text-white p-2 rounded-full"
              >
                <XIcon size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TestPage;
