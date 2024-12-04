// TERÁ QUE SER FEITO UMA LINKAGEM COM OS EVENTOS NA ABA EVENTOS PARA QUE APAREÇA AS INFORMAÇÕES AQUI!

// importações necessárias
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const EventRegister = () => {
  // contagem de números
  const [runningCount, setRunningCount] = useState(0);
  const [walkingCount, setWalkingCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice((runningCount + walkingCount) * 99);
  }, [runningCount, walkingCount]);

  const isDisabled = runningCount === 0 && walkingCount === 0;

  return (
    <div className="max-w-4xl mx-auto p-4 font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Banner de cima */}
      <header className="bg-primary dark:bg-secondary text-white text-center py-4 mb-6">
        <h1 className="text-3xl font-bold">1ª CORRIDA PROANIMAL</h1>
      </header>
      {/* Busca a imagem do evento */}
      <div className="flex flex-col md:flex-row gap-6 dark:bg-gray-700 rounded-lg">
        <div className="md:w-1/3">
          <img
            src="/api/placeholder/300/300"
            alt="1ª Corrida ProAnimal 5K"
            className="w-full rounded-lg shadow-md"
          />
          {/* Data do evento */}
          <div className="mt-4">
            <h2 className="font-semibold">Data do evento</h2>
            <p>06 de outubro de 2024</p>
          </div>
          {/* opção de compra com contador */}
          <div className="mt-4">
            <h2 className="font-semibold mb-2">CORRIDA</h2>
            <div className="flex items-center justify-between">
              <span>R$ 99,00</span>
              <div className="flex items-center">
                <button
                  onClick={() => setRunningCount(Math.max(0, runningCount - 1))}
                  className="bg-primary/20 rounded-full p-1"
                >
                  <ChevronDown size={24} />
                </button>
                <span className="mx-2">{runningCount}</span>
                <button
                  onClick={() => setRunningCount(runningCount + 1)}
                  className="bg-primary rounded-full p-1 text-white"
                >
                  <ChevronUp size={24} />
                </button>
              </div>
            </div>
          </div>
          {/* opção de categoria com contador */}
          <div className="mt-4">
            <h2 className="font-semibold mb-2">CÃOMINHADA</h2>
            <div className="flex items-center justify-between">
              <span>R$ 99,00</span>
              <div className="flex items-center">
                <button
                  onClick={() => setWalkingCount(Math.max(0, walkingCount - 1))}
                  className="bg-primary/20 rounded-full p-1"
                >
                  <ChevronDown size={24} />
                </button>
                <span className="mx-2">{walkingCount}</span>
                <button
                  onClick={() => setWalkingCount(walkingCount + 1)}
                  className="bg-primary rounded-full p-1 text-white"
                >
                  <ChevronUp size={24} />
                </button>
              </div>
            </div>
          </div>
          {/* Btn de compra de ingressos */}
          <div className="mt-4 flex items-center justify-between">
            <a href="/eventos/register/finalizar">
              <button
                className={`flex-grow py-2 rounded ${
                  isDisabled
                    ? "bg-secondary/50 text-gray-300 cursor-not-allowed"
                    : "bg-secondary text-white"
                }`}
                disabled={isDisabled}
              >
                {isDisabled ? "Selecione uma modalidade" : "Comprar ingresso"}
              </button>
            </a>
            {!isDisabled && (
              <span className="ml-2 font-semibold">
                R$ {totalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button className="w-full bg-primary text-white py-2 rounded mt-2">
            Já me inscrevi
          </button>
          <a href="/eventos/regulamento">
            <button className="w-full bg-primary text-white py-2 rounded mt-2">
              Regulamento
            </button>
          </a>
        </div>
            {/* informações do evento */}
        <div className="md:w-2/3 p-2 rounded-lg dark:bg-gray-700">
          <h2 className="text-2xl font-bold mb-4">1ª CORRIDA PROANIMAL 5K</h2>
          <p className="mb-4">
            A 1ª CORRIDA PROANIMAL 5K é uma iniciativa da ONG Abrigo Mossoró
            juntamente com a empresa Jogando Sports em fazer um evento
            beneficente, esportivo, social, participativo e competitivo, que tem
            como principal objetivo fomentar a prática de atividades físicas
            saudáveis e a busca pela qualidade de vida e pelo não ao
            sedentarismo através da Corrida de Rua.
          </p>
          <p className="mb-4">
            O Abrigo Mossoró tem a missão de resgatar cães e gatos em situação
            de risco e funciona como um Lar temporário e Centro de tratamento
            para esses animais. Oferecendo-lhes abrigo, alimentação, lazer e
            assistência veterinária, além de trabalhar a reintegração deles na
            sociedade, através da adoção.
          </p>
          <h3 className="font-semibold mt-4">Programação do evento:</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Concentração dos atletas prevista para 5h15.</li>
            <li>Aquecimento previsto para 5h35.</li>
            <li>
              Largada da cãominhada prevista para 5h45 e a corrida para 6h.
            </li>
            <li>Início da premiação previsto para 7h15.</li>
            <li>Finalização do evento prevista para 8h.</li>
          </ul>
          <p className="mt-4">
            A provas de caminhada (2 km) e corrida (5 km) terão a duração máxima
            de 75 (setenta e cinco) minutos. Após esse tempo, ou seja, assim que
            atingir esse período, todo percurso será desmontado, o pórtico de
            chegada será fechado e seus equipamentos e serviços serão
            desligados.
          </p>
          <h3 className="font-semibold mt-4">CONTATOS:</h3>
          <p>Instagram: @jogandosports e @abrigomossoro</p>
          <p>E-mail: jogandosports27@gmail.com</p>
          <p>Paulo Jeferson (84) 99632-0381</p>
        </div>
      </div>
    </div>
  );
};

export default EventRegister;
