import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  return (
    <nav className="bg-secondary sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-white tracking-tight">
              B<span className="text-brand-gold">!</span>TE
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#produtos"
              className="text-secondary-foreground hover:text-brand-orange transition-colors font-medium"
            >
              Produtos
            </a>
            <a
              href="#promocoes"
              className="text-secondary-foreground hover:text-brand-orange transition-colors font-medium"
            >
              Promoções
            </a>
            <a
              href="#contato"
              className="text-secondary-foreground hover:text-brand-orange transition-colors font-medium"
            >
              Contato
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Buscar Produtos"
                className="w-full bg-background/10 border-brand-brown-light/30 text-secondary-foreground placeholder:text-secondary-foreground/50 pr-10 focus:border-brand-orange focus:ring-brand-orange"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-foreground/50" />
            </div>
          </div>

          {/* Auth Buttons & Cart */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline-light">
              Login
            </Button>
            <Button variant="brand">
              Registrar
            </Button>
            <button className="relative p-2 text-secondary-foreground hover:text-brand-orange transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-orange text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-secondary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <div className="relative">
              <Input
                type="text"
                placeholder="Buscar Produtos"
                className="w-full bg-background/10 border-brand-brown-light/30 text-secondary-foreground placeholder:text-secondary-foreground/50 pr-10"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-foreground/50" />
            </div>
            <div className="flex flex-col gap-2">
              <a href="#produtos" className="text-secondary-foreground hover:text-brand-orange py-2">
                Produtos
              </a>
              <a href="#promocoes" className="text-secondary-foreground hover:text-brand-orange py-2">
                Promoções
              </a>
              <a href="#contato" className="text-secondary-foreground hover:text-brand-orange py-2">
                Contato
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              <Button variant="outline" className="flex-1 border-secondary-foreground/30 text-secondary-foreground">
                Login
              </Button>
              <Button className="flex-1 bg-brand-orange hover:bg-brand-gold text-primary-foreground">
                Registrar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;