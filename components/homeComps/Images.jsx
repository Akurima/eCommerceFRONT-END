import { useEffect, useState } from "react";

const images = [
  "/images/frontpage/1.png",
  "/images/frontpage/2.png",
  "/images/frontpage/3.png",
  "/images/frontpage/4.png",
  "/images/frontpage/5.png",
  "/images/frontpage/6.png",
  "/images/frontpage/7.png",
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
          className={`home-images ${i === index ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default Images;
