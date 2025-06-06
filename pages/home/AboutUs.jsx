import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";

function About() {
  return (
    <>
      <Header />

      <main style={{ padding: "2rem", textAlign: "center" }}>
        <img
          src="/images/frontpage/2.png"
          alt="Café con clase"
          style={{ maxWidth: "100%", height: "100%" }}
        />
      </main>
      <Footer />
    </>
  );
}

export default About;
