import Header from "../components/Header";
import Images from "../components/Images";
import ProductCard from "../components/ProductCard";
import HomeProducts from "../components/HomeProducts";
import Footer from "../components/Footer";
import "./App.css";

function App() {
  const handleAddToCart = (product) => {
    alert(`"${product.title}" agregado al carrito 🛒`);
  };

  
  return (
    <>
      <Header />
      <Images />
      <HomeProducts />
      <ProductCard products={products} onAddToCart={handleAddToCart} />
      <Footer />
    </>
  );
}

export default App;
