import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Heart, Star, Minus, Plus, ShoppingCart, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import LoginModal from "@/components/LoginModal";
import RegisterModal from "@/components/RegisterModal";
import { Button } from "@/components/ui/button";
import { getProductById, Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? "fill-highlight text-highlight"
            : i < rating
            ? "fill-highlight/50 text-highlight"
            : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Carregando...</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} | B!TE Brownies</title>
        <meta name="description" content={product.description} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header
          onLoginClick={() => setIsLoginOpen(true)}
          onRegisterClick={() => setIsRegisterOpen(true)}
        />

        <main className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-8 p-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Like Button */}
              <motion.button
                onClick={() => setIsLiked(!isLiked)}
                className="absolute top-4 left-4 p-3 bg-card/90 backdrop-blur-sm rounded-full shadow-soft"
                whileTap={{ scale: 0.9 }}
              >
                <Heart
                  className={`w-6 h-6 transition-colors ${
                    isLiked ? "fill-destructive text-destructive" : "text-muted-foreground"
                  }`}
                />
              </motion.button>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col"
            >
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground uppercase">
                {product.name}
              </h1>

              {product.isHighlight && (
                <div className="mt-3">
                  <span className="badge-highlight">
                    <Star className="w-4 h-4 fill-current" />
                    Destaque
                  </span>
                </div>
              )}

              <div className="mt-4">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-4xl font-bold text-foreground ml-1">
                  {product.price.toFixed(2).replace(".", ",")}
                </span>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Quantidade
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="w-16 text-center font-medium text-lg">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="mt-6">
                <AnimatePresence mode="wait">
                  {isAdded ? (
                    <motion.div
                      key="added"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <Button
                        className="w-full h-14 text-lg bg-accent/20 text-accent border-2 border-accent rounded-xl"
                        disabled
                      >
                        <Check className="w-5 h-5 mr-2" />
                        Adicionado ao Carrinho!
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
                        className="w-full h-14 text-lg btn-primary rounded-xl"
                      >
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        Adicionar no Carrinho
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Description */}
              <div className="mt-8 p-5 bg-muted rounded-2xl">
                <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            </motion.div>
          </div>

          {/* Reviews */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              Avaliações
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-card p-6 rounded-2xl shadow-soft"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(review.rating)}
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{review.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{review.comment}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-semibold">
                        {review.userName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{review.userName}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </main>

        <Footer />

        <Cart />

        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
          onSwitchToRegister={() => {
            setIsLoginOpen(false);
            setIsRegisterOpen(true);
          }}
        />

        <RegisterModal
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          onSwitchToLogin={() => {
            setIsRegisterOpen(false);
            setIsLoginOpen(true);
          }}
        />
      </div>
    </>
  );
};

export default ProductPage;
