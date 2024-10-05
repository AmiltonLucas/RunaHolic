// importações necessárias
import React from "react";
import Slider from "react-slick";

// const com informações das avaliações
const TestimonialData = [
  {
    id: 1,
    name: "Ana Souza",
    text: "A Runaholic é incrível! Encontrei exatamente o que precisava para minhas corridas, desde tênis de alta performance até roupas confortáveis.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "João Pereira",
    text: "O melhor equipamento para minha primeira maratona. Com certeza, virei cliente fiel!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Lucas Oliveira",
    text: "A Runaholic tem tudo que um corredor precisa. Desde acessórios, tênis, até roupas leves e de alta qualidade. Recomendo!",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Pedro Costa",
    text: "Adorei comprar na Runaholic! Além dos preços competitivos, o material esportivo que adquiri foi de excelente qualidade.",
    img: "https://picsum.photos/104/104",
  },
  {
    name: "Marcos Almeida",
    text: "Sempre faço minhas compras na Runaholic. A loja tem uma variedade enorme de produtos de corrida, e o site é muito fácil de navegar.",
    img: "https://picsum.photos/105/105",
  },
];

const Avaliacoes = () => {
  // configurações do slider
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* seção de texto */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            O que nossos clientes estão dizendo
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            depoimentos
          </h1>
        </div>

        {/* cards de testemunhos/avalições */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                {/* Puxa o id da mensagem */}
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-500 bg-secondary/30 relative"
                >
                  {/* puxa a foto da imagem */}
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* Puxa do texto da avaliação */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-black dark:text-white">
                        {data.text}
                      </p>
                      {/* Puxa o nome de quem fez a avaliação */}
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  {/* Apenas pra deixar bonito */}
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Avaliacoes;
