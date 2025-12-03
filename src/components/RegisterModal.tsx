import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, EyeOff, User, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }: RegisterModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem!");
      return;
    }
    toast.success("Conta criada com sucesso!", {
      description: "Bem-vindo à B!TE!",
    });
    onClose();
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
            onClick={onClose}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-card rounded-3xl shadow-2xl overflow-hidden border-4 border-primary max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="relative bg-primary p-6 text-center">
                <motion.button
                  onClick={onClose}
                  className="absolute right-4 top-4 p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5 text-primary-foreground" />
                </motion.button>
                <h2 className="text-3xl font-display font-bold text-primary-foreground">
                  B<span className="text-highlight">!</span>TE
                </h2>
                <p className="text-primary-foreground/70 mt-2">Crie sua conta</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Nome</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome completo"
                      className="input-field pl-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className="input-field pl-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Senha</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="input-field pl-12 pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Confirmar Senha</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="input-field pl-12 pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-sm">
                  <input type="checkbox" className="rounded border-border mt-1" required />
                  <span className="text-muted-foreground">
                    Li e aceito os{" "}
                    <a href="#" className="text-accent hover:underline">
                      Termos de Uso
                    </a>{" "}
                    e{" "}
                    <a href="#" className="text-accent hover:underline">
                      Política de Privacidade
                    </a>
                  </span>
                </div>

                <Button
                  type="submit"
                  className="w-full btn-primary h-14 text-lg rounded-2xl font-semibold"
                >
                  CRIAR CONTA
                </Button>

                <p className="text-center text-muted-foreground">
                  Já tem uma conta?{" "}
                  <button
                    type="button"
                    onClick={onSwitchToLogin}
                    className="text-accent font-medium hover:underline"
                  >
                    Faça login
                  </button>
                </p>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RegisterModal;
