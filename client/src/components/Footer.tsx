import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t-2 border-primary">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg text-primary mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Pizzaria Calamari
            </h3>
            <p className="text-foreground/70 text-sm">
              Autêntica pizza com ingredientes frescos e receitas tradicionais desde 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#apresentacao" className="text-foreground/70 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#cardapio" className="text-foreground/70 hover:text-primary transition-colors">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-foreground/70 hover:text-primary transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-foreground/70 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Horário de Funcionamento</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Sexta - Segunda: 18:00 - 23:00</li>
              <li>Sábado: 18:00 - 23:00</li>
              <li>Domingo: 18:00 - 23:00</li>
              <li className="text-primary font-semibold">Fechado às Quartas e Quintas</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>&copy; {currentYear} Pizzaria Calamari. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
