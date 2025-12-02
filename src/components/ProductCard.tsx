import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  isPromo?: boolean;
}

const ProductCard = ({
  name,
  description,
  price,
  originalPrice,
  image,
  isPromo,
}: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Promo Badge */}
        {isPromo && (
          <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">
            Promoção
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isFavorite ? "fill-destructive text-destructive" : "text-muted-foreground"
            }`}
          />
        </button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="brand" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Adicionar
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-card-foreground text-lg line-clamp-1">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        <div className="flex items-center gap-2 pt-2">
          {originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              {formatPrice(originalPrice)}
            </span>
          )}
          <span className="text-brand-orange font-bold text-xl">
            {formatPrice(price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;