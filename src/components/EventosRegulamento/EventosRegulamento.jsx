// TERÁ QUE SER FEITO UMA LINKAGEM COM OS EVENTOS NA ABA EVENTOS PARA QUE APAREÇA AS INFORMAÇÕES AQUI!

// importações necessárias
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const EventRegulamento = () => {
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
        <h1 className="text-3xl font-bold">REGULAMENTO - 1ª CORRIDA PROANIMAL</h1>
      </header>
      {/* Busca a imagem do evento */}
      <div className="flex flex-col md:flex-row gap-6 m-auto dark:bg-gray-700 rounded-lg">
        
        {/* informações do evento */}
        <div className=" p-2 rounded-lg dark:bg-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-center">REGULAMENTO</h2>
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

export default EventRegulamento;
