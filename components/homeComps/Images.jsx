import { useEffect, useState } from "react";
import "../../src/style/Images.css";

const images = [
  "/images/frontpage/1.svg",
  "/images/frontpage/2.svg",
  "/images/frontpage/3.svg",
  "/images/frontpage/4.svg",
  "/images/frontpage/5.svg",
  "/images/frontpage/6.svg",
  "/images/frontpage/7.svg",
];

const Images = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid p-0 position-relative overflow-hidden image-slider">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Imagen ${i + 1}`}
          className={`home-images img-fluid ${i === index ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default Images;
