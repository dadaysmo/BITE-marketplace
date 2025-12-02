import ProductCard from "./ProductCard";
import brownieTradicional from "@/assets/brownie-tradicional.png";
import brownieNutella from "@/assets/brownie-nutella.png";
import brownieRedVelvet from "@/assets/brownie-redvelvet.png";
import brownieDoceLeite from "@/assets/brownie-doce-leite.png";
import brownieDuplo from "@/assets/brownie-duplo.png";
import brownieMorango from "@/assets/brownie-morango.png";

const products = [
  {
    id: 1,
    name: "Brownie Tradicional",
    description: "Delicioso brownie de chocolate meio amargo com nozes",
    price: 12.9,
    image: brownieTradicional,
  },
  {
    id: 2,
    name: "Brownie com Nutella",
    description: "Brownie recheado com generosa camada de Nutella",
    price: 15.9,
    image: brownieNutella,
  },
  {
    id: 3,
    name: "Brownie Red Velvet",
    description: "Brownie vermelho com cobertura de cream cheese",
    price: 14.9,
    image: brownieRedVelvet,
  },
  {
    id: 4,
    name: "Brownie com Doce de Leite",
    description: "Brownie com recheio cremoso de doce de leite argentino",
    price: 14.9,
    image: brownieDoceLeite,
  },
  {
    id: 5,
    name: "Brownie Duplo Chocolate",
    description: "Para os verdadeiros amantes de chocolate",
    price: 16.9,
    image: brownieDuplo,
  },
  {
    id: 6,
    name: "Brownie com Morango",
    description: "Brownie especial com pedaços de morango fresco",
    price: 15.9,
    image: brownieMorango,
  },
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-brand-orange">Produtos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra nossa seleção de brownies artesanais, feitos com ingredientes
            selecionados e muito amor
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-gold font-semibold text-lg transition-colors group">
            Ver todos os produtos
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;