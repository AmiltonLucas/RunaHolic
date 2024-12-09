// importações necessárias
import React from "react";

const OpcoesProdutos = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      {/* Container principal  */}
      <div
        className="container mx-auto p-6 dark:bg-gray-900 dark:text-white transition-all duration-200"
        data-aos="fade-up"
      >
        {/* Grid para filtros e produtos */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          {/* Produtos */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-4 lg:grid-cols-4">
            {/* Card de Produto */}
            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-700 dark:text-white">
              <img
                src="https://via.placeholder.com/200"
                alt="Produto 1"
                className="mb-4 m-auto h-48 w-[50%] rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">Tênis de Corrida</h3>
              <p className="text-gray-600 dark:text-white">R$320</p>
              <a href="/produto">
                <button className="bg-primary hover:bg-primary/80 dark:bg-secondary dark:hover:bg-secondary/80 mt-4 w-full rounded-md py-2 text-white">
                  Saiba Mais
                </button>
              </a>
            </div>

            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-700 dark:text-white">
              <img
                src="https://via.placeholder.com/200"
                alt="Produto 2"
                className="mb-4 m-auto h-48 w-[50%] rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">NaN</h3>
              <p className="text-gray-600 dark:text-white">R$NaN</p>
              <a href="/produto">
                <button className="bg-primary hover:bg-primary/80 dark:bg-secondary dark:hover:bg-secondary/80 mt-4 w-full rounded-md py-2 text-white">
                  Saiba Mais
                </button>
              </a>
            </div>

            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-700 dark:text-white">
              <img
                src="https://via.placeholder.com/200"
                alt="Produto 3"
                className="mb-4 m-auto h-48 w-[50%] rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">NaN</h3>
              <p className="text-gray-600 dark:text-white">R$NaN</p>
              <a href="/produto">
                <button className="bg-primary hover:bg-primary/80 dark:bg-secondary dark:hover:bg-secondary/80 mt-4 w-full rounded-md py-2 text-white">
                  Saiba Mais
                </button>
              </a>
            </div>

            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-700 dark:text-white">
              <img
                src="https://via.placeholder.com/200"
                alt="Produto 4"
                className="mb-4 m-auto h-48 w-[50%] rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">NaN</h3>
              <p className="text-gray-600 dark:text-white">R$NaN</p>
              <a href="/produto">
                <button className="bg-primary hover:bg-primary/80 dark:bg-secondary dark:hover:bg-secondary/80 mt-4 w-full rounded-md py-2 text-white">
                  Saiba Mais
                </button>
              </a>
            </div>

            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-700 dark:text-white">
              <img
                src="https://via.placeholder.com/200"
                alt="Produto 5"
                className="mb-4 m-auto h-48 w-[50%] rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">NaN</h3>
              <p className="text-gray-600 dark:text-white">R$NaN</p>
              <a href="/produto">
                <button className="bg-primary hover:bg-primary/80 dark:bg-secondary dark:hover:bg-secondary/80 mt-4 w-full rounded-md py-2 text-white">
                  Saiba Mais
                </button>
              </a>
            </div>

            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-700 dark:text-white">
              <img
                src="https://via.placeholder.com/200"
                alt="Produto 6"
                className="mb-4 m-auto h-48 w-[50%] rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">NaN</h3>
              <p className="text-gray-600 dark:text-white">R$NaN</p>
              <a href="/produto">
                <button className="bg-primary hover:bg-primary/80 dark:bg-secondary dark:hover:bg-secondary/80 mt-4 w-full rounded-md py-2 text-white">
                  Saiba Mais
                </button>
              </a>
            </div>

            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-700 dark:text-white">
              <img
                src="https://via.placeholder.com/200"
                alt="Produto 7"
                className="mb-4 m-auto h-48 w-[50%] rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">NaN</h3>
              <p className="text-gray-600 dark:text-white">R$NaN</p>
              <a href="/produto">
                <button className="bg-primary hover:bg-primary/80 dark:bg-secondary dark:hover:bg-secondary/80 mt-4 w-full rounded-md py-2 text-white">
                  Saiba Mais
                </button>
              </a>
            </div>

            <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-700 dark:text-white">
              <img
                src="https://via.placeholder.com/200"
                alt="Produto 8"
                className="mb-4 m-auto h-48 w-[50%] rounded-md object-cover"
              />
              <h3 className="text-lg font-semibold">NaN</h3>
              <p className="text-gray-600 dark:text-white">R$NaN</p>
              <a href="/produto">
                <button className="bg-primary hover:bg-primary/80 dark:bg-secondary dark:hover:bg-secondary/80 mt-4 w-full rounded-md py-2 text-white">
                  Saiba Mais
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpcoesProdutos;
