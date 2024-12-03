import React from "react";

export default function EventosUserRegisto() {
  return (
    <div className="flex flex-col xl:flex-row gap-8 p-8">
      {/* Formulário */}
      <div className="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-2 bprder-gray-300 p-6 shadow-md rounded-lg">
        <h2 className="text-lg font-bold mb-4">DADOS DO PARTICIPANTE</h2>

        <form>
          {/* Dados Pessoais */}
          <div className="mb-6">
            <h3 className="text-primary dark:text-secondary font-semibold mb-2">
              Dados pessoais
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nome completo"
                className="input-field border-2 border-gray-300 dark:bg-transparent p-2 rounded-full"
              />
              <input
                type="text"
                placeholder="CPF"
                className="input-field border-2 border-gray-300 dark:bg-transparent p-2 rounded-full"
              />
              <input
                type="date"
                placeholder="Data de nascimento"
                className="input-field border-2 border-gray-300 dark:bg-transparent p-2 rounded-full"
              />
              <select className="input-field border-2 border-gray-300 dark:bg-transparent p-2 rounded-full">
                <option className="text-gray-900">Gênero</option>
                <option className="text-gray-900">Masculino</option>
                <option className="text-gray-900">Feminino</option>
              </select>
            </div>
          </div>

          {/* Endereço */}
          <div className="mb-6">
            <h3 className="text-primary dark:text-secondary font-semibold mb-2">
              Endereço
            </h3>
            <input
              type="text"
              placeholder="CEP"
              className="input-field w-full border-2 border-gray-300 dark:bg-transparent p-2 rounded-full"
            />
          </div>

          {/* Contatos */}
          <div className="mb-6">
            <h3 className="text-primary dark:text-secondary font-semibold mb-2">
              Contatos
            </h3>
            <input
              type="text"
              placeholder="Telefone (Whatsapp)"
              className="input-field w-full mb-4 border-2 border-gray-300 dark:bg-transparent p-2 rounded-full"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="input-field w-full border-2 border-gray-300 dark:bg-transparent p-2 rounded-full"
            />
          </div>

          {/* Camisas */}
          <div className="mb-6">
            <h3 className="text-primary dark:text-secondary font-semibold mb-2">
              Camisas
            </h3>
            <div className="flex gap-4">
              <button className="shirt-button border-2 border-gray-300 dark:bg-transparent p-2 rounded">
                P
              </button>
              <button className="shirt-button border-2 border-gray-300 dark:bg-transparent p-2 rounded">
                M
              </button>
              <button className="shirt-button border-2 border-gray-300 dark:bg-transparent p-2 rounded">
                G
              </button>
              <button className="shirt-button border-2 border-gray-300 dark:bg-transparent p-2 rounded">
                GG
              </button>
            </div>
          </div>

          {/* Equipe */}
          <div className="mb-6">
            <h3 className="text-primary dark:text-secondary font-semibold mb-2">
              Equipe
            </h3>
            <input
              type="text"
              placeholder="Nome da equipe"
              className="input-field w-full border-2 border-gray-300 dark:bg-transparent p-2 rounded-full"
            />
          </div>

          {/* Termos */}
          <div className="mb-6 flex items-center gap-2">
            <input type="checkbox" id="termos" className="w-4 h-4" />
            <label
              htmlFor="termos"
              className="text-sm text-gray-700 dark:text-gray-300"
            >
              Declaro que li e aceito os{" "}
              <span className="text-blue-500">termos de responsabilidade</span>.
            </label>
          </div>

          {/* Cupom */}
          <div className="flex gap-4 items-center mb-6">
            <input
              type="text"
              placeholder="Cupom de desconto"
              className="input-field flex-1 border-2 border-gray-300 dark:bg-transparent p-2 rounded-full w-[30%]"
            />
            <button className="bg-primary dark:bg-secondary text-white px-4 py-2 rounded-lg">
              Adicionar Cupom
            </button>
          </div>

          {/* Botão Finalizar */}
          <button className="bg-primary dark:bg-secondary text-white w-full py-3 rounded-lg font-semibold">
            FINALIZAR
          </button>
        </form>
      </div>

      {/* Resumo da Inscrição */}
      <div className="w-full xl:w-1/3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-2 bprder-gray-300 p-6 shadow-md rounded-lg">
        <h3 className="text-primary dark:text-secondary font-bold mb-4">
          Resumo da inscrição
        </h3>
        <ul className=" text-sm">
          <li className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span className="font-bold">R$ 80,00</span>
          </li>
          <li className="flex justify-between mb-2">
            <span>Modalidade</span>
            <span className="font-bold">CAMINHADA</span>
          </li>
          <li className="flex justify-between">
            <span>Quantidade</span>
            <span className="font-bold">1</span>
          </li>
        </ul>
        <div className="border-t border-gray-300 my-4"></div>
        <div className="flex justify-between text-lg font-bold">
          <span>Subtotal</span>
          <span>R$ 80,00</span>
        </div>
      </div>
      {/* Formas de Pagamento */}
      <div className="w-full xl:w-1/3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-2 bprder-gray-300  p-6 shadow-md rounded-lg">
        <h3 className=" text-gray-900 dark:text-gray-100 font-bold mb-4">
          FINALIZAÇÃO DO PAGAMENTO
        </h3>
        <div className="mb-6">
          <h4 className="text-primary dark:text-secondary font-semibold mb-2">
            Formas de pagamento
          </h4>
          <div className="border border-gray-300 rounded-lg p-4 mb-4 flex justify-between items-center">
            <div>
              <p className="font-bold">PIX - QR Code e chave</p>
              <p className="text-sm  text-gray-900 dark:text-gray-100">
                A confirmação do pagamento é de imediato e você receberá o
                comprovante de inscrição em menos de 24h.
              </p>
            </div>
            <span className="text-sm font-semibold  text-gray-900 dark:text-gray-100">
              Taxa de serviço de 10%
            </span>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
            <div>
              <p className="font-bold">Cartão de crédito</p>
              <p className="text-sm text-gray-900 dark:text-gray-100">
                A confirmação do pagamento é de imediato e você receberá o
                comprovante de inscrição em menos de 24h.
              </p>
            </div>
            <span className="text-sm font-semibold  text-gray-900 dark:text-gray-100">
              Taxa de serviço de 10%
            </span>
          </div>
        </div>

        <div className="border-t border-gray-300 my-4"></div>
        <div className="flex justify-between  text-gray-900 dark:text-gray-100 text-lg font-bold">
          <span>Total</span>
          <span>R$ 80,00</span>
        </div>
      </div>
    </div>
  );
}

/* Tailwind CSS classes utilizadas */
// .input-field { border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 }
// .shirt-button { border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition }
