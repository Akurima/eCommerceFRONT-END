import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import ProductCard from "../../components/homeComps/ProductCard";
import products from "../../products";

function Store() {
  return (
    <>
      <Header />
      <ProductCard products={products} />
      <Footer />
    </>
  );
}

export default Store;
