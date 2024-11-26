import React, { useState } from "react";
import Foto from "../../assets/women/Loja3.jpeg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Lojas = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleInfo = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 dark:bg-gray-800 p-8 shadow-md">
      {/* Informações à Esquerda */}
      <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          RunaHolic - RN
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          R. Jorn. Jorge Freire, 60 - Nova Betânia, Mossoró - RN, 59607-410
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4 flex gap-2">
          <a href="https://wa.me/55849858" target="_blank">
            <FaWhatsapp className="text-3xl" />
          </a>
          (84)998585990
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4 flex gap-2">
          <a
            href="https://www.instagram.com/use.runaholic_?igsh=Yjh3Ym10aDd5ejZv"
            target="_blank"
          >
            <FaInstagram className="text-3xl" />
          </a>
          Instagram
        </p>
        <div>
          <div
            className="more-info mt-2"
            onClick={toggleInfo}
            style={{
              cursor: "pointer",
              color: "#3b82f6",
            }}
          >
            {isExpanded ? "Menos informações" : "Mais informações"}
          </div>
          <div className="bio text-gray-700 dark:text-gray-300">
            {isExpanded ? (
              <>
                Segunda-feira: 9:00 as 11:30 -- 14:00 as 18:00
                <br />
                Terça-feira: 9:00 as 11:30 -- 14:00 as 18:00
                <br />
                Quarta-feira: 9:00 as 11:30 -- 14:00 as 18:00
                <br />
                Quinta-feira: 9:00 as 11:30 -- 14:00 as 18:00
                <br />
                Sexta-feira: 9:00 as 11:30 -- 14:00 as 18:00
                <br />
                Sábado: 9:00 as 11:30 -- 14:00 as 18:00
                <br />
                Domingo: Fechado
                <br />
              </>
            ) : (
              "Horários de funcionamento"
            )}
          </div>
        </div>

        <div
          className="map-container mt-5"
          style={{ width: "100%", maxWidth: "100%", maxheight: "400px" }}
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4 flex gap-2">
            Localização:
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.529847648113!2d-37.3596492249701!3d-5.179038194798407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ba071cc2e2e5af%3A0x32b3e0a404b1fe1a!2sRunaholic!5e0!3m2!1spt-BR!2sbr!4v1727973339306!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Imagem à Direita */}
      <div className="w-full md:w-1/3">
        <img
          src={Foto}
          alt="Foto Sobre Nós"
          className="w-[600px] h-[600px] rounded-lg shadow-lg "
        />
      </div>
    </div>
  );
};

export default Lojas;
