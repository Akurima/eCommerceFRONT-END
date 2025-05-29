import { useEffect, useState } from "react";
import "../src/App.css";

const images = [
  "../images/frontpage/img1.png",
  "../images/frontpage/img2.png",
  "../images/frontpage/img3.png",
  "../images/frontpage/img4.png",
  "../images/frontpage/img5.png",
  "../images/frontpage/img6.png",
  "../images/frontpage/img7.png",
  "../images/frontpage/img8.png",
  "../images/frontpage/img9.png",
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
          alt={`Slide ${i + 1}`}
          className={`home-image-1 position-absolute top-0 start-0 w-100 h-100 transition-opacity ${
            i === index ? "opacity-100 z-1" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
};

export default Images;
