import Header from "../components/Header";
import Images from "../components/Images";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import "./App.css";

function App() {
  const handleAddToCart = (product) => {
    alert(`"${product.title}" agregado al carrito 🛒`);
  };

  const products = [
    {
      image:
        "https://thelittlestcrumb.com/wp-content/uploads/salted-caramel-macchiato-featured-image-1.jpg",
      title: "Caramel Macchiato",
      description: "Café con caramelo y leche vaporizada",
      price: 100,
    },
    {
      image:
        "https://www.everyday-delicious.com/wp-content/uploads/2021/05/caffee-mocha-kawa-mokka-everyday-delicious-1.jpg",
      title: "Mocha Vainilla",
      description: "Delicioso café con esencia de vainilla",
      price: 200,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/1200px-Caffe_Latte_at_Pulse_Cafe.jpg",
      title: "Classic Latte",
      description: "Delicioso café Latte con leche vaporizada",
      price: 150,
    },
  ];

  return (
    <>
      <Header />
      <Images />
      <ProductCard products={products} onAddToCart={handleAddToCart} />
      <Footer />
    </>
  );
}

export default App;
