import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import HomeProducts from "../../components/homeComps/HomeProducts";
import ProductCard from "../../components/homeComps/ProductCard";
import products from "../../products";

function Store() {
  return (
    <>
      <Header />
      <HomeProducts />
      <ProductCard products={products} />
      <Footer />
    </>
  );
}

export default Store;
