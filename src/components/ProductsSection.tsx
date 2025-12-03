import { motion } from "framer-motion";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductSectionProps {
  title: string;
  products: Product[];
  bgColor?: "default" | "muted";
  id?: string;
}

const ProductSection = ({ title, products, bgColor = "default", id }: ProductSectionProps) => {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 ${bgColor === "muted" ? "bg-primary text-primary-foreground" : "bg-background"}`}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`section-title mb-8 md:mb-12 ${bgColor === "muted" ? "text-primary-foreground" : ""}`}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
