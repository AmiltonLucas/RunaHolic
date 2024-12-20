// Importações necessárias
import React from "react";
import BannerImg from "../../assets/women/Banner.jpeg";
import { GrSecure } from "react-icons/gr";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Seção de imagem */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* seção de informações e textos */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Outlet Runaholic
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Encontre aqui peças com descontos imperdiveis, aproveite para
              renovar seu guarda roupas esportivo com o estilo Runaholic. Corra
              antes que acabem.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Produtos de qualidade</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <CiDeliveryTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Entrega Rápida</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaMoneyBillWave className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Método de pagamento fácil</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <BiSolidOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Receba ofertas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
