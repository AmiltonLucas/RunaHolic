//importações necessárias
import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern1.png";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

// const de adaptação do bannner
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

// links clicaveis para o user
const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Sobre nós",
    link: "/sobrenos",
  },
  {
    title: "Contato",
    link: "/sobrenos",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Detalhes da empresa */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              RunaHolic
            </h1>
          </div>

          {/* Links do footer */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              {/* Links opcionais: podem ser removidos */}
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* links de redes sociais */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://www.instagram.com/use.runaholic_?igsh=Yjh3Ym10aDd5ejZv"
                  target="_blank"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100072463867735&locale=pt_BR"
                  target="_blank"
                >
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="https://wa.me/55849858" target="_blank">
                  <FaWhatsapp className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                {/* Informações de endereço e telefone */}
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>
                    R.Jorn. Jorge Freire, 60 - Nova Betânia - Mossoró - RN -
                    Brasil
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+55 84 9858-5990</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
