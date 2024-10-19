import React, { useState } from "react";

const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Informações de Contato e Envio */}
        <div className="bg-white dark:bg-gray-600  p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-gray-200">Informações de contato</h2>
          <input
            type="email"
            placeholder="Digite seu email"
            className="w-full p-3 border rounded mb-4 bg-white dark:bg-gray-500"
          />
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-gray-200">Informações de envio</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Nome"
              className="p-3 border rounded bg-white dark:bg-gray-500"
            />
            <input
              type="text"
              placeholder="Sobre nome"
              className="p-3 border rounded bg-white dark:bg-gray-500"
            />
          </div>
          <input
            type="text"
            placeholder="Company"
            className="w-full p-3 border rounded mb-4 bg-white dark:bg-gray-500"
          />
          <input
            type="text"
            placeholder="Endereço"
            className="w-full p-3 border rounded mb-4 bg-white dark:bg-gray-500"
          />
          <input
            type="text"
            placeholder="Apartamento, Casa, etc."
            className="w-full p-3 border rounded mb-4 bg-white dark:bg-gray-500"
          />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Estado"
              className="p-3 border rounded bg-white dark:bg-gray-500"
            />
            <input
              type="text"
              placeholder="Cidade"
              className="p-3 border rounded bg-white dark:bg-gray-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Bairro"
              className="p-3 border roundedbg-white dark:bg-gray-500"
            />
            <input
              type="text"
              placeholder="Número da residencia"
              className="p-3 border rounded bg-white dark:bg-gray-500"
            />
          </div>
          <input
            type="text"
            placeholder="Complemento"
            className="w-full p-3 border rounded mb-4 bg-white dark:bg-gray-500"
          />
        </div>

        {/* Seção de Resumo do Pedido e Pagamento */}
        <div className="bg-white dark:bg-gray-600 p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-gray-200">Método de entrega</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setDeliveryMethod("standard")}
              className={`p-4 border rounded ${
                deliveryMethod === "standard"
                  ? "border-secondary"
                  : "border-gray-300"
              }`}
            >
              <h3 className="font-medium text-gray-700 dark:text-gray-300">Padrão</h3>
              <p className=" text-gray-800 dark:text-gray-400">4–10 Dias úteis</p>
              <p className="font-semibold text-gray-700 dark:text-gray-300">$VarNumberString</p>
            </button>
            <button
              onClick={() => setDeliveryMethod("express")}
              className={`p-4 border rounded ${
                deliveryMethod === "express"
                  ? "border-primary"
                  : "border-gray-300"
              }`}
            >
              <h3 className="font-medium text-gray-700 dark:text-gray-300">Rápida</h3>
              <p className=" text-gray-700 dark:text-gray-400">2–5 Dias úteis</p>
              <p className="font-semibold text-gray-700 dark:text-gray-300">$VarNumberString</p>
            </button>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-black dark:text-gray-200">Método de Pagamento</h2>
          <div className="flex gap-4 mb-4">
            <label className="flex items-center text-black dark:text-gray-200">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={() => setPaymentMethod("creditCard")}
                className="mr-2"
              />
              Cartão de credito
            </label>
            <label className="flex items-center text-black dark:text-gray-200">
              <input
                type="radio"
                name="paymentMethod"
                value="pix"
                checked={paymentMethod === "pix"}
                onChange={() => setPaymentMethod("pix")}
                className="mr-2"
              />
              Pix
            </label>
            <label className="flex items-center text-black dark:text-gray-200">
              <input
                type="radio"
                name="paymentMethod"
                value="boleto"
                checked={paymentMethod === "boleto"}
                onChange={() => setPaymentMethod("boleto")}
                className="mr-2"
              />
              Boleto
            </label>
          </div>

          {paymentMethod === "creditCard" && (
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Número do cartão"
                className="w-full p-3 border rounded bg-white dark:bg-gray-500"
              />
              <input
                type="text"
                placeholder="Nome do cartão"
                className="w-full p-3 border rounded bg-white dark:bg-gray-500"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Data de validade (MM/YY)"
                  className="p-3 border rounded bg-white dark:bg-gray-500"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="p-3 border rounded bg-white dark:bg-gray-500"
                />
              </div>
            </div>
          )}

          {paymentMethod === "pix" && (
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Número do cartão"
                className="w-full p-3 border rounded bg-white dark:bg-gray-500"
              />
              <input
                type="text"
                placeholder="Nome do cartão"
                className="w-full p-3 border rounded bg-white dark:bg-gray-500"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Data de validade (MM/YY)"
                  className="p-3 border rounded bg-white dark:bg-gray-500"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="p-3 border rounded bg-white dark:bg-gray-500"
                />
              </div>
            </div>
          )}

          {paymentMethod === "boleto" && (
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Número do cartão"
                className="w-full p-3 border rounded bg-white dark:bg-gray-500"
              />
              <input
                type="text"
                placeholder="Nome do cartão"
                className="w-full p-3 border rounded bg-white dark:bg-gray-500"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Data de validade (MM/YY)"
                  className="p-3 border rounded bg-white dark:bg-gray-500"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="p-3 border rounded bg-white dark:bg-gray-500"
                />
              </div>
            </div>
          )}
          
        </div>

        {/* Resumo do Pedido */}
        <div className="bg-white dark:bg-gray-600 p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-gray-200">Pedido</h2>
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="font-medium text-gray-700 dark:text-gray-300">Basic Tee</h3>
                <p className=" text-gray-500 dark:text-gray-400">Black, Large</p>
              </div>
              <p className="font-medium text-gray-700 dark:text-white">$32.00</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-700 dark:text-gray-300">Basic Tee</h3>
                <p className=" text-gray-500 dark:text-gray-400">Sienna, Large</p>
              </div>
              <p className="font-medium text-gray-700 dark:text-white">$32.00</p>
            </div>
          </div>
          <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-300">
            <p>Subtotal</p>
            <p>$64.00</p>
          </div>
          <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-300">
            <p>Envio</p>
            <p>$5.00</p>
          </div>
          <div className="flex justify-between mb-4 text-gray-700 dark:text-gray-300">
            <p>Taxas</p>
            <p>$5.52</p>
          </div>
          <div className="flex justify-between font-semibold text-lg mb-4 text-gray-900 dark:text-white">
            <p>Total</p>
            <p>$75.52</p>
          </div>
          <button className="w-full bg-primary text-white p-3 rounded">
            Confirmar pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
