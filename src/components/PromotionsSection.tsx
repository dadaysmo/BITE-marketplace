import ProductCard from "./ProductCard";
import { Sparkles } from "lucide-react";
import comboFamilia from "@/assets/combo-familia.png";
import browniePistache from "@/assets/brownie-pistache.png";
import kitDegustacao from "@/assets/kit-degustacao.png";

const promoProducts = [
  {
    id: 101,
    name: "Combo Família",
    description: "6 brownies variados com desconto especial",
    price: 59.9,
    originalPrice: 79.9,
    image: comboFamilia,
    isPromo: true,
  },
  {
    id: 102,
    name: "Brownie Especial do Mês",
    description: "Brownie de pistache com chocolate branco",
    price: 12.9,
    originalPrice: 18.9,
    image: browniePistache,
    isPromo: true,
  },
  {
    id: 103,
    name: "Kit Degustação",
    description: "4 mini brownies para experimentar nossos sabores",
    price: 29.9,
    originalPrice: 39.9,
    image: kitDegustacao,
    isPromo: true,
  },
];

const PromotionsSection = () => {
  return (
    <section id="promocoes" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-5 w-5 text-brand-orange" />
            <span className="text-brand-orange font-semibold">Ofertas Especiais</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
            <span className="text-brand-orange">Promoções</span> da Semana
          </h2>
          <p className="text-secondary-foreground/70 text-lg max-w-2xl mx-auto">
            Aproveite nossas ofertas por tempo limitado e experimente a felicidade
            em forma de brownie
          </p>
        </div>

        {/* Promo Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {promoProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-orange to-brand-gold rounded-3xl p-8 md:p-12 text-center animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            Primeira compra?
          </h3>
          <p className="text-secondary/90 text-lg mb-6 max-w-xl mx-auto">
            Use o cupom <span className="font-bold">PRIMEROBITE</span> e ganhe 15%
            de desconto no seu primeiro pedido!
          </p>
          <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors shadow-lg">
            Usar Cupom
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;