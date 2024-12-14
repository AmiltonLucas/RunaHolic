// TERÁ QUE SER FEITO UMA LINKAGEM COM OS EVENTOS NA ABA EVENTOS PARA QUE APAREÇA AS INFORMAÇÕES AQUI!

// importações necessárias
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { MdGroup } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

const EventRegister = () => {
  // contagem de números
  const [runningCount, setRunningCount] = useState(0);
  const [walkingCount, setWalkingCount] = useState(0);
  const [dis5kmCount, setDis5kmCount] = useState(0);
  const [dis10kmCount, setDis10kmCount] = useState(0);
  const [dis21kmCount, setDis21kmCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      (runningCount +
        walkingCount +
        dis5kmCount +
        dis10kmCount +
        dis21kmCount) *
        99
    );
  }, [runningCount, walkingCount, dis5kmCount, dis10kmCount, dis21kmCount]);

  const isDisabledN = runningCount === 0 && walkingCount === 0;

  const [isModalOpen, setModalOpen] = useState(false);
  const [isDisabled, setDisabled] = useState(false); // Substitua pela sua lógica atual

  const handleButtonClick = () => {
    if (!isDisabled) {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="max-w-4xl mx-auto p-4 font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Banner de cima */}
      <header className="bg-primary dark:bg-secondary text-white text-center py-4 mb-6">
        <h1 className="text-3xl font-bold">1ª CORRIDA PROANIMAL</h1>
      </header>

      {/* Busca a imagem do evento */}
      <div className="flex flex-col md:flex-row gap-6 dark:bg-gray-700 rounded-lg">
        <div className="md:w-1/3 pl-2">
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

          {/* opção de categoria com contador */}
          <div className="mt-4">
            <h2 className="font-semibold mb-2">DISTÂNCIA 5km</h2>
            <div className="flex items-center justify-between">
              <span>R$ 40,00</span>
              <div className="flex items-center">
                <button
                  onClick={() => setDis5kmCount(Math.max(0, dis5kmCount - 1))}
                  className="bg-primary/20 rounded-full p-1"
                >
                  <ChevronDown size={24} />
                </button>
                <span className="mx-2">{dis5kmCount}</span>
                <button
                  onClick={() => setDis5kmCount(dis5kmCount + 1)}
                  className="bg-primary rounded-full p-1 text-white"
                >
                  <ChevronUp size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* opção de categoria com contador */}
          <div className="mt-4">
            <h2 className="font-semibold mb-2">DISTÂNCIA 10km</h2>
            <div className="flex items-center justify-between">
              <span>R$ 50,00</span>
              <div className="flex items-center">
                <button
                  onClick={() => setDis10kmCount(Math.max(0, dis10kmCount - 1))}
                  className="bg-primary/20 rounded-full p-1"
                >
                  <ChevronDown size={24} />
                </button>
                <span className="mx-2">{dis10kmCount}</span>
                <button
                  onClick={() => setDis10kmCount(dis10kmCount + 1)}
                  className="bg-primary rounded-full p-1 text-white"
                >
                  <ChevronUp size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* opção de categoria com contador */}
          <div className="mt-4">
            <h2 className="font-semibold mb-2">DISTÂNCIA 21km</h2>
            <div className="flex items-center justify-between">
              <span>R$ 60,00</span>
              <div className="flex items-center">
                <button
                  onClick={() => setDis21kmCount(Math.max(0, dis21kmCount - 1))}
                  className="bg-primary/20 rounded-full p-1"
                >
                  <ChevronDown size={24} />
                </button>
                <span className="mx-2">{dis21kmCount}</span>
                <button
                  onClick={() => setDis21kmCount(dis21kmCount + 1)}
                  className="bg-primary rounded-full p-1 text-white"
                >
                  <ChevronUp size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Btn de compra de ingressos */}
          <div className="mt-4 flex items-center justify-between">
            <button
              className={`flex-grow py-2 rounded ${
                isDisabled
                  ? "bg-secondary/50 text-gray-300 cursor-not-allowed"
                  : "bg-secondary text-white"
              }`}
              disabled={isDisabled}
              onClick={handleButtonClick}
            >
              {isDisabled ? "Selecione uma modalidade" : "Comprar ingresso"}
            </button>
            {!isDisabled && (
              <span className="ml-2 font-semibold">
                R$ {totalPrice.toFixed(2)}
              </span>
            )}

            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
          </div>
          <div className="flex justify-between">
            <a href="/eventos/regulamento">
              <button className="w-[17rem] bg-primary hover:bg-primary/80 dark:bg-secondary dark:hover:bg-secondary/80 text-white py-2 rounded mt-2">
                Regulamento
              </button>
            </a>
          </div>
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

function Modal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:size-10">
                  <ExclamationTriangleIcon
                    aria-hidden="true"
                    className="size-6 text-blue-700"
                  />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-gray-900"
                  >
                    Para quem será a inscrição?
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-md text-gray-500 p-2 border-2 border-gray-300 rounded-xl mt-2 cursor-pointer">
                      Para mim mesmo <IoMdPerson />
                    </p>
                    <p className="text-md text-gray-500 p-2 border-2 border-gray-300 rounded-xl mt-2 cursor-pointer">
                      Para outra pessoa <MdGroup />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={onClose}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Fechar
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default EventRegister;
