import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import PromotionsSection from "@/components/PromotionsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProductsSection />
        <PromotionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;