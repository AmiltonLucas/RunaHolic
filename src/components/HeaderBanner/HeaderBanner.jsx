import React, { useState, useEffect } from "react";

const FullScreenBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["/banner1.png", "/banner2.png"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div
      className={`md:h-[100vh] h-[35vh] flex justify-center items-center transition-all duration-700`}
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
    </div>
  );
};

export default FullScreenBanner;
