import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import brownieImage from "@/assets/brownie-hero.png";

const Hero = () => {
  return (
    <section className="relative bg-secondary overflow-hidden min-h-[600px] md:min-h-[700px]">
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
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[600px] md:min-h-[700px] py-12">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-brand-white tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              B<span className="text-brand-gold">!</span>TE
            </h1>
            <p className="font-display text-3xl md:text-4xl text-brand-cream italic animate-fade-in" style={{ animationDelay: "0.2s" }}>
              o símbolo da felicidade
            </p>
            <div className="pt-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <p className="font-display text-2xl md:text-3xl text-brand-cream mb-3">
                encomende agora!
              </p>
              <a
                href="tel:1234567890"
                className="inline-flex items-center gap-2 text-brand-gold text-xl md:text-2xl font-bold hover:text-brand-orange transition-colors"
              >
                <Phone className="h-6 w-6" />
                (12) 3456-7890
              </a>
            </div>
            <div className="pt-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                variant="brand"
                className="text-lg px-8 py-6 shadow-glow transition-all hover:scale-105"
              >
                Ver Cardápio
              </Button>
            </div>
          </div>

          {/* Right Content - Brownie Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <img
                  src={brownieImage}
                  alt="Delicioso brownie artesanal de chocolate"
                  className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500"
                />
                {/* Overlay glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-brand-brown/30 to-transparent pointer-events-none" />
              </div>
              {/* Decorative crumbs */}
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

export default Hero;
