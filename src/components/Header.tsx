import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const Header = ({ onLoginClick, onRegisterClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { openCart, totalItems } = useCart();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Sobre Nós", href: "/#contato" },
    { name: "Produtos", href: "/#produtos" },
    { name: "Promoções", href: "/#promocoes" },
    { name: "Contato", href: "/#contato" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.h1 
              className="text-2xl md:text-3xl font-display font-bold text-primary-foreground"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              B<span className="text-highlight">!</span>TE
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar Produtos"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 lg:w-80 px-4 py-2 pl-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-highlight focus:border-transparent transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/50" />
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={onLoginClick}
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                Login
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onRegisterClick}
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Registrar
              </Button>
            </div>

            {/* Cart Button */}
            <motion.button
              onClick={openCart}
              className="relative p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-6 h-6" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-highlight text-highlight-foreground text-xs font-bold rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-primary-foreground/10">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Buscar Produtos"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 pl-10 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-highlight"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/50" />
                  </div>
                </form>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-2 mb-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-4 py-3 text-primary-foreground hover:bg-primary-foreground/10 rounded-xl transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>

                {/* Mobile Auth Buttons */}
                <div className="flex gap-2 pt-4 border-t border-primary-foreground/10">
                  <Button
                    variant="ghost"
                    className="flex-1 text-primary-foreground hover:bg-primary-foreground/10"
                    onClick={() => {
                      setIsMenuOpen(false);
                      onLoginClick();
                    }}
                  >
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    onClick={() => {
                      setIsMenuOpen(false);
                      onRegisterClick();
                    }}
                  >
                    Registrar
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
