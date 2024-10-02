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
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Sobre Nós</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Bem-vindo à nossa empresa! Temos como missão proporcionar o melhor
          atendimento e oferecer produtos da mais alta qualidade. Nossa equipe
          trabalha incansavelmente para atender às necessidades de nossos
          clientes, sempre buscando inovação e excelência.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
          Nossa jornada começou em [ano], e desde então, temos crescido e
          evoluído, tornando-nos uma referência no setor. Agradecemos por fazer
          parte dessa história!
        </p>
      </div>
    </div>
  );
};

export default SobreNosContainer;
