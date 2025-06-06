import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Images from "../../components/Images";
import HomeProducts from "../../components/HomeProducts";
import ProductCard from "../../components/ProductCard";
import products from "../../products";

function Home() {
  return (
    <>
      <Header />
      <Images />
      <HomeProducts />
      <ProductCard products={products} />
      <Footer />
    </>
  );
}

export default Home;
