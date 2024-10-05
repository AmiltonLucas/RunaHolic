//importações necessarias
import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

// Lista de produtos, será necessario troca por const para troca dinamica!
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Top cropped",
    description:
      "Leve e estiloso, nosso top cropped oferece suporte ideal para seus treinos",
  },
  {
    id: 2,
    img: Img2,
    title: "Short de corrida",
    description:
      "Desenvolvido para os apaixonados por corrida, o short de corrida é fabricado com material leve e de secagem rápida. ",
  },
  {
    id: 3,
    img: Img3,
    title: "Conjunto Alexa",
    description:
      "O conjunto Alexa é a combinação perfeita de conforto e elegância para o dia a dia ou atividades físicas. Composto por top e legging de tecido suave e flexível.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container mt-10 mb-10">
        {/* seção de textos */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Produtos em alta
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Melhores produtos
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            protudos de alta qualidade e padrão que só a RunaHolic pode
            oferecer!
          </p>
        </div>
        {/* Seção corpo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* Seção de imagens */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* seção de detalhes dos produtos */}
              <div className="p-4 text-center">
                {/* seção de avaliações por estrelas */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                {/* Botão de fazer pedido */}
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Conferir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
