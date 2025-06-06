import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";

function About() {
  return (
    <>
      <Header />

      <main style={{ padding: "2rem", textAlign: "center" }}>
        <img
          src="/images/frontpage/About Us.jpg"
          alt="Café con clase"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </main>
      <Footer />
    </>
  );
}

export default About;
