import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-brand-orange">
              B<span className="text-brand-gold">!</span>TE
            </h2>
            <p className="font-display text-xl text-brand-cream italic">
              o símbolo da felicidade
            </p>
            <p className="text-secondary-foreground/70 text-sm">
              Brownies artesanais feitos com amor e ingredientes de qualidade
              desde 2020.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-orange">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-brand-orange transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-secondary-foreground/70 hover:text-brand-orange transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#promocoes" className="text-secondary-foreground/70 hover:text-brand-orange transition-colors">
                  Promoções
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/70 hover:text-brand-orange transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-orange">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Phone className="h-4 w-4 text-brand-orange" />
                <span>(12) 3456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Mail className="h-4 w-4 text-brand-orange" />
                <span>contato@bite.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="h-4 w-4 text-brand-orange mt-1" />
                <span>Rua dos Doces, 123<br />São Paulo, SP</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-orange">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-brand-brown-light/50 rounded-full hover:bg-brand-orange transition-colors group"
              >
                <Instagram className="h-5 w-5 text-secondary-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="p-3 bg-brand-brown-light/50 rounded-full hover:bg-brand-orange transition-colors group"
              >
                <Facebook className="h-5 w-5 text-secondary-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
            <p className="text-secondary-foreground/70 text-sm">
              Siga-nos e fique por dentro das novidades!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-brown-light/30 mt-12 pt-8 text-center">
          <p className="text-secondary-foreground/50 text-sm">
            © 2024 B!TE. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;