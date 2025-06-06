import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Images from "../../components/Images";
import HomeProducts from "../../components/HomeProducts";
import ProductCard from "../../components/ProductCard";

function Home() {
  const verMas = (product) => {};
  return (
    <>
      <Header />
      <Images />
      <HomeProducts />
      <ProductCard products={products} onAddToCart={verMas} />
      <Footer />
    </>
  );
}

export default Home;
