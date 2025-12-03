import brownieImage from "@/assets/brownie-hero.png";

const Hero = () => {
  return (
    <section className="relative bg-secondary overflow-hidden min-h-[450px] md:min-h-[700px]">
      {/* Background curved shape */}
      <div className="absolute bottom-0 right-0 w-full h-full">
        <svg
          viewBox="0 0 1440 700"
          className="absolute bottom-0 right-0 w-full h-full"
          preserveAspectRatio="xMaxYMax slice"
        >
          <path
            d="M600,0 Q900,100 1000,300 Q1100,500 1440,400 L1440,700 L0,700 L0,500 Q200,400 400,300 Q500,200 600,0"
            fill="hsl(35 75% 59%)"
          />
        </svg>
      </div>

      {/* Floating chocolate pieces decoration */}
      <div className="absolute top-20 right-20 w-8 h-8 bg-brand-brown rounded-sm rotate-45 animate-float opacity-60" style={{ animationDelay: "0s" }} />
      <div className="absolute top-40 right-40 w-6 h-6 bg-brand-brown rounded-sm rotate-12 animate-float opacity-50" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-60 right-60 w-4 h-4 bg-brand-brown rounded-sm -rotate-12 animate-float opacity-40" style={{ animationDelay: "1s" }} />
      <div className="absolute top-32 right-80 w-5 h-5 bg-brand-brown-light rounded-sm rotate-45 animate-float opacity-50" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Usando grid (que vira 1 coluna no mobile) com alinhamento centralizado */}
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[450px] md:min-h-[700px] py-12">
          
          {/* CONTEÚDO ESQUERDO (SIMPLIFICADO PARA MOBILE) */}
          <div className="text-center lg:text-left space-y-6">
            {/* COR RIGIDA PARA text-brand-cream E AUMENTADO PARA text-7xl */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-brand-cream tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              B<span className="text-brand-brown">!</span>TE
            </h1>
            {/* AUMENTADO PARA text-4xl */}
            <p className="font-display text-4xl md:text-4xl text-brand-cream italic animate-fade-in" style={{ animationDelay: "0.2s" }}>
              o símbolo da felicidade
            </p>
          </div>

          {/* Right Content - Brownie Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <img
                  src={brownieImage}
                  alt="Delicioso brownie artesanal de chocolate"
                  className="w-96 h-96 md:w-full md:max-w-xl md:h-auto object-cover rounded-3xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-brand-brown/30 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-brand-brown rounded-lg rotate-12 opacity-80" />
              <div className="absolute -bottom-8 left-8 w-8 h-8 bg-brand-brown-light rounded-lg -rotate-6 opacity-70" />
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-brand-brown rounded-lg rotate-45 opacity-60" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            d="M0,60 Q360,120 720,60 T1440,60 L1440,120 L0,120 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBrownie from "@/assets/hero-brownie.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBrownie}
          alt="Delicioso brownie com chocolate derretido"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4">
              B<span className="text-highlight">!</span>TE
            </h1>
            <p className="font-display text-xl md:text-2xl text-highlight italic mb-8">
              o símbolo da felicidade
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-primary-foreground/80 text-lg max-w-md">
              Descubra o prazer dos melhores brownies artesanais da cidade. 
              Cada mordida é uma experiência única de chocolate premium.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-highlight text-highlight-foreground hover:bg-highlight/90 rounded-full px-8 group"
                onClick={() => document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Produtos
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="tel:+551234567890"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">(12) 3456-7890</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-highlight/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;
