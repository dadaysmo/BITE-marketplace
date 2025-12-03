import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const policyLinks = [
    { name: "Termos de Uso", href: "#" },
    { name: "Política de Privacidade", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "SAC", href: "#" },
  ];

  return (
    <footer id="contato" className="bg-muted py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Logo & Social */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-3xl font-display font-bold text-foreground">
                B<span className="text-highlight">!</span>TE
              </h2>
            </Link>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Sobre nós
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A B!TE é uma loja online criada para tornar mais fácil e delicioso o seu momento doce! 💕
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Nosso objetivo é oferecer uma plataforma prática e moderna para pedidos de brownies, 
              com carrinho de compras, opções de pagamento online e presencial, além de uma área de 
              gerenciamento pensada para o controle do negócio.
            </p>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Políticas
            </h3>
            <ul className="space-y-3">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} B!TE Brownies. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
