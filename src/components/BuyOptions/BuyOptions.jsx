// importações necessárias
import React from "react";

const BuyOptions = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      {/* Container principal  */}
      <div
        className="container mx-auto p-6 dark:bg-gray-900 dark:text-white transition-all duration-200"
        data-aos="fade-up"
      >
        {/* Grid para filtros e produtos */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {/* Filtros */}
          <div className="rounded-lg bg-white p-4 shadow md:col-span-1 dark:bg-gray-700 dark:text-white">
            <h2 className="mb-4 text-xl font-semibold">Filtros</h2>
            <form>
              {/* Filtro por Categoria */}
              <div className="mb-4">
                <label
                  for="category"
                  className="block font-medium text-gray-700 dark:text-white"
                >
                  Categoria
                </label>
                <select
                  id="category"
                  className="mt-2 block w-full rounded-md border border-gray-300 p-2  dark:bg-gray-600 dark:text-white"
                >
                  <option value="">Todos</option>
                  <option value="running">Corrida</option>
                  <option value="casual">Casual</option>
                  <option value="sportswear">Esportivo</option>
                </select>
              </div>

              {/* Filtro por Preço */}
              <div className="mb-4">
                <label
                  for="price"
                  className="block font-medium text-gray-700 dark:text-white"
                >
                  Preço
                </label>
                <input
                  type="range"
                  id="price"
                  min="0"
                  max="500"
                  step="10"
                  className="mt-2 w-full"
                />
                <div className="flex justify-between text-sm">
                  <span>$0</span>
                  <span>$500</span>
                </div>
              </div>

              {/* Filtro por Tamanho */}
              <div class="mb-4">
                <label
                  for="size"
                  className="block font-medium text-gray-700 dark:text-white"
                >
                  Tamanho
                </label>
                <select
                  id="size"
                  className="mt-2 block w-full rounded-md border border-gray-300 p-2 dark:bg-gray-600 dark:text-white"
                >
                  <option value="">Todos</option>
                  <option value="small">Pequeno</option>
                  <option value="medium">Médio</option>
                  <option value="large">Grande</option>
                </select>
              </div>
              {/* Filtro de cores */}
              <div className="mb-4">
                <label className="block font-medium text-gray-700 dark:text-white">
                  Cor
                </label>
                <div className="mt-2 flex space-x-2">
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
                  ></button>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full border border-gray-300 bg-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                  ></button>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full border border-gray-300 bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  ></button>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full border border-gray-300 bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  ></button>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full border border-gray-300 bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  ></button>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full border border-gray-300 bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300"
                  ></button>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full border border-gray-300 bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  ></button>
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full border border-gray-300 bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                  ></button>
                </div>
              </div>

              {/* Botão Aplicar Filtros */}
              <button
                type="submit"
                className="mt-4 w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600"
              >
                Aplicar Filtros
              </button>
            </form>
          </div>

          {/* Produtos */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-3 lg:grid-cols-4">
            {/* Card de Produto */}
            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-700 dark:text-white">
              <img
                src="https://via.placeholder.com/200"
                alt="Produto 1"
                className="mb-4 h-48 w-full rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">Tênis de Corrida</h3>
              <p className="text-gray-600 dark:text-white">R$320</p>
              <button className="bg-primary hover:bg-primary/80 mt-4 w-full rounded-md py-2 text-white">
                Comprar
              </button>
            </div>

            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-700 dark:text-white">
              <img
                src="https://via.placeholder.com/200"
                alt="Produto 2"
                className="mb-4 h-48 w-full rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">NaN</h3>
              <p className="text-gray-600 dark:text-white">R$NaN</p>
              <button className="bg-primary hover:bg-primary/80 mt-4 w-full rounded-md py-2 text-white">
                Comprar
              </button>
            </div>

            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-700 dark:text-white">
              <img
                src="https://via.placeholder.com/200"
                alt="Produto 3"
                className="mb-4 h-48 w-full rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">NaN</h3>
              <p className="text-gray-600 dark:text-white">R$NaN</p>
              <button className="bg-primary hover:bg-primary/80 mt-4 w-full rounded-md py-2 text-white">
                Comprar
              </button>
            </div>

            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-700 dark:text-white">
              <img
                src="https://via.placeholder.com/200"
                alt="Produto 4"
                className="mb-4 h-48 w-full rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">NaN</h3>
              <p className="text-gray-600 dark:text-white">R$NaN</p>
              <button className="bg-primary hover:bg-primary/80 mt-4 w-full rounded-md py-2 text-white">
                Comprar
              </button>
            </div>

            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-700 dark:text-white">
              <img
                src="https://via.placeholder.com/200"
                alt="Produto 5"
                className="mb-4 h-48 w-full rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">NaN</h3>
              <p className="text-gray-600 dark:text-white">R$NaN</p>
              <button className="bg-primary hover:bg-primary/80 mt-4 w-full rounded-md py-2 text-white">
                Comprar
              </button>
            </div>

            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-700 dark:text-white">
              <img
                src="https://via.placeholder.com/200"
                alt="Produto 6"
                className="mb-4 h-48 w-full rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">NaN</h3>
              <p className="text-gray-600 dark:text-white">R$NaN</p>
              <button className="bg-primary hover:bg-primary/80 mt-4 w-full rounded-md py-2 text-white">
                Comprar
              </button>
            </div>

            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-700 dark:text-white">
              <img
                src="https://via.placeholder.com/200"
                alt="Produto 7"
                className="mb-4 h-48 w-full rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">NaN</h3>
              <p className="text-gray-600 dark:text-white">R$NaN</p>
              <button className="bg-primary hover:bg-primary/80 mt-4 w-full rounded-md py-2 text-white">
                Comprar
              </button>
            </div>

            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-700 dark:text-white">
              <img
                src="https://via.placeholder.com/200"
                alt="Produto 8"
                className="mb-4 h-48 w-full rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">NaN</h3>
              <p className="text-gray-600 dark:text-white">R$NaN</p>
              <button className="bg-primary hover:bg-primary/80 mt-4 w-full rounded-md py-2 text-white">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyOptions;
