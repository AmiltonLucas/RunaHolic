"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { MdGroup } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

function TestPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDisabled, setDisabled] = useState(false); // Substitua isso pela sua lógica atual

  const handleButtonClick = () => {
    if (!isDisabled) {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
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

      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </div>
    
  );
}

// Componente Modal corrigido
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

export default TestPage;
