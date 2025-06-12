import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import Images from "../../components/homeComps/Images";
import HomeProducts from "../../components/homeComps/HomeProducts";
import HomeCards from "../../components/homeComps/HomeCards";
import products from "../../products";

function Home() {
  return (
    <>
      <Header />
      <Images />
      <HomeProducts />
      <HomeCards products={products} />
      <Footer />
    </>
  );
}

export default Home;
