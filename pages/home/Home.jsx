// src/pages/Home.jsx

import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import Images from "../../components/homeComps/Images";
import HomeProducts from "../../components/homeComps/HomeProducts";
import HomeCards from "../../components/homeComps/HomeCards";
import DiscountModal from "../../components/homeComps/DiscountModal";
import products from "../../products";
import WhyChooseUs from "../../components/homeComps/WhyChooseUs";
import BlogSection from "../../components/homeComps/BlogSection";
import NewsSection from "../../components/homeComps/NewsSection";
import NewsletterSection from "../../components/homeComps/NewsletterSection";
import EventAgenda from "../../components/homeComps/Events";
import TopProducts from "../../components/homeComps/TopProducts"; 

function Home() {
  return (
    <>
      <DiscountModal />
      <Header />
      <Images />
      <section className="text-center my-5">
        <HomeProducts />
      </section>
      <HomeCards products={products} />
      <NewsSection />
      <BlogSection />
      <EventAgenda />
      <WhyChooseUs />
      <NewsletterSection /> 
      <Footer />
    </>
  );
}

export default Home;
