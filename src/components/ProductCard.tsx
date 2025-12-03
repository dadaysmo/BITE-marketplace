import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Check, Heart, Star } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/produto/${product.id}`}>
        <div className="card-product group cursor-pointer">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Highlight Badge */}
            {product.isHighlight && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute top-3 left-3"
              >
                <span className="badge-highlight">
                  <Star className="w-3 h-3 fill-current" />
                  Destaque
                </span>
              </motion.div>
            )}

            {/* Like Button */}
            <motion.button
              onClick={handleLike}
              className="absolute top-3 right-3 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <Heart
                className={`w-5 h-5 transition-colors ${
                  isLiked ? "fill-destructive text-destructive" : "text-muted-foreground"
                }`}
              />
            </motion.button>

            {/* Rating */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-card/80 backdrop-blur-sm">
              <Star className="w-4 h-4 fill-highlight text-highlight" />
              <span className="text-sm font-medium text-foreground">{product.rating}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-5">
            <h3 className="font-display text-lg font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-2xl font-bold text-accent mb-4">
              {formatPrice(product.price)}
            </p>

            {/* Add to Cart Button */}
            <AnimatePresence mode="wait">
              {isAdded ? (
                <motion.div
                  key="added"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Button
                    className="w-full bg-accent/20 text-accent border-2 border-accent hover:bg-accent/30"
                    disabled
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Adicionado!
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="add"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <Button
                    onClick={handleAddToCart}
                    className="w-full btn-accent rounded-xl"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Adicionar ao Carrinho
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
