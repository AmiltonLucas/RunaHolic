import React, { useState, useEffect } from "react";

const images = ["/banner1.png", "/banner2.png"];

function FullScreenBanner() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Muda a imagem a cada 5 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="w-full bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <style>
        {`
          @media (max-width: 1440px) {
            div {
              height: 80vh;
              background-position: center center;
            }
          }
          @media (max-width: 1024px) {
            div {
              height: 60vh;
              background-position: center center;
            }
          }
          @media (max-width: 768px) {
            div {
              height: 50vh;
              background-position: center center;
            }
          }
        `}
      </style>
    </div>
  );
}

export default FullScreenBanner;
