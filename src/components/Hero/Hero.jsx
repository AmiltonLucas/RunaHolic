import React from "react";
import Image1 from "../../assets/hero/men.png";
import Image2 from "../../assets/hero/logo.png";
import Image3 from "../../assets/hero/camisaeshort.png";
import Slider from "react-slick";

// Lista de informações do slider
const ImageList = [
  {
    id: 1,
    img: Image3,
    title: "Personalize suas camisas conosco.",
    description:
      "Na Runaholic, você tem a liberdade de criar camisas que refletem o seu estilo e a sua por esportes.",
  },
  {
    id: 2,
    img: Image2,
    title: "No Pix é mais barato!",
    description: "10% de desconto para pagamento via Pix em todo site.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  // Configurações do slider
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-secondary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* Seção Hero */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* seção de conteúdo de texto da hero */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title}
                  </h1>
                  <p className="text-sm">{data.description}</p>
                </div>
                {/* seção de imagem da hero */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
