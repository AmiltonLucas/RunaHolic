import React from "react";
import Foto from "../../assets/women/women.png";

const SobreNosContainer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 dark:bg-gray-800 p-8 shadow-md">
      {/* Imagem à Esquerda */}
      <div className="w-full md:w-1/2">
        <img
          src={Foto}
          alt="Foto Sobre Nós"
          className="w-[600px] h-[600px] rounded-lg shadow-lg "
        />
      </div>

      {/* Informações à Direita */}
      <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Sobre Nós
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Somos a Runaholic, uma marca feita para aqueles que, como nós, são
          viciados em correr. Mais do que um nome, Runaholic representa o
          espírito de quem encontra na corrida um propósito, um estilo de vida.
          Desde 2020, estamos nas ruas, trilhas e avenidas, ao lado de cada
          corredor que busca superação e foco a cada passo.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
          Nascemos no Nordeste, e nossa essência carrega essa energia vibrante e
          autêntica da nossa terra. Criada por corredores para corredores, cada
          peça é cuidadosamente produzida com o que sabemos que importa:
          conforto, durabilidade e a performance necessária para cada
          quilômetro.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
          Na Runaholic, não vendemos apenas roupas, mas sim a nossa paixão pela
          corrida. Venha correr conosco e descubra o que é ser um verdadeiro
          Runaholic!
        </p>
      </div>
    </div>
  );
};

export default SobreNosContainer;
