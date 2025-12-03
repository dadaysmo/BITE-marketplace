import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBrownie from "@/assets/brownie-hero.png";

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
