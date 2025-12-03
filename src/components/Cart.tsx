import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Cart = () => {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleCheckout = () => {
    toast.success("Pedido finalizado com sucesso!", {
      description: "Em breve você receberá a confirmação por email.",
    });
    clearCart();
    closeCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-card shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-accent" />
                <h2 className="text-xl font-display font-bold text-foreground">Seu Carrinho</h2>
              </div>
              <motion.button
                onClick={closeCart}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6 text-muted-foreground" />
              </motion.button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
                  <p className="text-lg font-medium text-muted-foreground mb-2">
                    Seu carrinho está vazio
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    Adicione alguns brownies deliciosos!
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex gap-4 p-4 bg-background rounded-2xl"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded-xl"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-foreground line-clamp-1">
                            {item.product.name}
                          </h3>
                          <p className="text-accent font-bold mt-1">
                            {formatPrice(item.product.price)}
                          </p>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex items-center gap-1 bg-muted rounded-full">
                              <motion.button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="p-2 hover:bg-muted-foreground/10 rounded-full transition-colors"
                                whileTap={{ scale: 0.9 }}
                              >
                                <Minus className="w-4 h-4" />
                              </motion.button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <motion.button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="p-2 hover:bg-muted-foreground/10 rounded-full transition-colors"
                                whileTap={{ scale: 0.9 }}
                              >
                                <Plus className="w-4 h-4" />
                              </motion.button>
                            </div>
                            
                            <motion.button
                              onClick={() => removeFromCart(item.product.id)}
                              className="p-2 text-destructive hover:bg-destructive/10 rounded-full transition-colors ml-auto"
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash2 className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t border-border p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-xl font-bold text-foreground">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full btn-accent h-14 text-lg rounded-2xl"
                >
                  Finalizar Pedido
                </Button>
                <button
                  onClick={closeCart}
                  className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Continuar Comprando
                </button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
