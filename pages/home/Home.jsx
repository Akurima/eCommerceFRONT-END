import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import Images from "../../components/homeComps/Images";
import HomeProducts from "../../components/homeComps/HomeProducts";
import ProductCard from "../../components/homeComps/ProductCard";
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
