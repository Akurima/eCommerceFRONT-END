import { useEffect, useState } from "react";
import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import HomeProducts from "../../components/homeComps/HomeProducts";
import ProductCard from "../../components/homeComps/ProductCard";
import axiosInstance from "../../src/api/axiosInstance";

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };

    fetchProducts();
  }, []);

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
