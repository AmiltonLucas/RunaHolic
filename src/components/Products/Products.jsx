// Importações necessárias
import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Img5 from "../../assets/women/women5.jpg";
import { FaStar } from "react-icons/fa6";

// Const com produtos e informações usadas, terá que ser trocada por const dinamica
const ProductsData = [
  {
    id: 1, // Id do produto
    img: Img1, // Imagem do produto
    title: "Conjunto compressão", // informação do produto
    rating: 5.0, // Estrelas do produto
    color: "Rosa", // Cor do produto
    aosDelay: "0", // delay para aparecer
  },
  {
    id: 2,
    img: Img2,
    title: "Top Croped",
    rating: 5,
    color: "Branco",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Regata esportiva",
    rating: 4.9,
    color: "Preto",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Short de compressão",
    rating: 5,
    color: "Preto",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Short de corrida",
    rating: 4.7,
    color: "Azul",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-14 dark:bg-gray-900 dark:text-white">
      <div className="container dark:bg-gray-900 dark:text-white">
        {/* Seção de texto */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top produtos mais vendidos
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Produtos Femininos
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 dark:text-gray-300">
            Seleção de produtos femininos mais vendidos
          </p>
        </div>
        {/* seção corpo */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Seção dos produtos */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Botão ver mais */}
          <div className="flex justify-center">
            <a href="/feminino">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
                Ver mais
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
