import React from "react";

const TestPage = () => {
  const pedido = {
    numero: 26,
    produto: {
      nome: "Shorts Duplo",
      preco: "R$ 59,90",
      quantidade: 1,
      precoFinal: "R$ 59,90",
      dataCompra: "26/06/2024",
    },
    endereco: {
      rua: "Av. Brasil",
      bairro: "Centro",
      cidade: "Mossoró",
      estado: "RN",
      cep: "59600-000",
      telefone: "(84) 99999-9999",
      nome: "João Silva",
    },
  };

  return (
    <div className="max-w-md mx-auto border border-gray-300 p-4 shadow-lg rounded-lg mt-2">
      {/* Pedido Número */}
      <p className="font-bold text-sm mb-2">Pedido N {pedido.numero}</p>

      <div className="flex">
        {/* Imagem do Produto */}
        <img
          src="https://via.placeholder.com/120x160" // Insira a imagem real
          alt="Livro Lições Perpétuas"
          className="w-32 h-44 object-cover mr-4"
        />

        {/* Informações do Produto */}
        <div>
          <h2 className="text-xl font-bold">{pedido.produto.nome}</h2>
          <p>Preço: {pedido.produto.preco}</p>
          <p>Quantidade: {pedido.produto.quantidade}</p>
          <p>Preço final: {pedido.produto.precoFinal}</p>
          <p>Data da compra: {pedido.produto.dataCompra}</p>
        </div>
      </div>

      {/* Endereço de Entrega */}
      <div className="mt-4">
        <h3 className="font-bold text-lg mb-2">Endereços de entrega</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <p>
            <span className="font-semibold">Rua:</span> {pedido.endereco.rua}
          </p>
          <p>
            <span className="font-semibold">Bairro:</span> {pedido.endereco.bairro}
          </p>
          <p>
            <span className="font-semibold">Cidade:</span> {pedido.endereco.cidade}
          </p>
          <p>
            <span className="font-semibold">Estado:</span> {pedido.endereco.estado}
          </p>
          <p>
            <span className="font-semibold">Cep:</span> {pedido.endereco.cep}
          </p>
          <p>
            <span className="font-semibold">Nome:</span> {pedido.endereco.nome}
          </p>
          <p>
            <span className="font-semibold">Telefone:</span> {pedido.endereco.telefone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
