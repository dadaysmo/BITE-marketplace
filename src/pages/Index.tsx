import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import LoginModal from "@/components/LoginModal";
import RegisterModal from "@/components/RegisterModal";
import { getProductsByCategory } from "@/data/products";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const destacados = getProductsByCategory("destaque");
  const bolos = getProductsByCategory("bolo");
  const recheados = getProductsByCategory("recheado");

  const handleSwitchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>B!TE - Brownies Artesanais | O Símbolo da Felicidade</title>
        <meta
          name="description"
          content="Descubra os melhores brownies artesanais da cidade. Brownies tradicionais, recheados e bolos de brownie feitos com chocolate premium. Peça agora!"
        />
        <meta name="keywords" content="brownies, brownies artesanais, chocolate, doces, sobremesas, B!TE" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header
          onLoginClick={() => setIsLoginOpen(true)}
          onRegisterClick={() => setIsRegisterOpen(true)}
        />

        <main>
          <Hero />

          <section id="produtos">
            <ProductSection
              title="BROWNIES EM DESTAQUE"
              products={destacados}
              id="promocoes"
            />

            <ProductSection
              title="BOLOS DE BROWNIE"
              products={bolos}
              bgColor="muted"
            />

            <ProductSection
              title="BROWNIES RECHEADOS"
              products={recheados}
            />
          </section>
        </main>

        <Footer />

        <Cart />

        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onSwitchToRegister={handleSwitchToRegister}
        />

        <RegisterModal
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          onSwitchToLogin={handleSwitchToLogin}
        />
      </div>
    </>
  );
};

export default Index;
