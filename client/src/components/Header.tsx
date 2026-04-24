import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b-2 border-primary shadow-lg">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <img src="client/src/images/logo-calamari-4K.jfif" alt="logo calamari" className='w-16 h-16 bg-primary rounded-full flex items-center justify-center' />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Playfair Display' }}>
              Calamari
            </h1>
            <p className="text-sm text-foreground/60">Pizzaria </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('apresentacao')}
            className="text-foreground hover:text-primary transition-colors font-semibold"
          >
            Apresentação
          </button>
          <button
            onClick={() => scrollToSection('galeria')}
            className="text-foreground hover:text-primary transition-colors font-semibold"
          >
            Galeria
          </button>
          <button
            onClick={() => scrollToSection('cardapio')}
            className="text-foreground hover:text-primary transition-colors font-semibold"
          >
            Cardápio
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="text-foreground hover:text-primary transition-colors font-semibold"
          >
            Contato
          </button>
        </nav>

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-secondary/20 rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-accent" />
            ) : (
              <Moon className="w-5 h-5 text-primary" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary/20 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-card border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('apresentacao')}
              className="text-left text-foreground hover:text-primary transition-colors font-semibold py-2"
            >
              Apresentação
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="text-left text-foreground hover:text-primary transition-colors font-semibold py-2"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection('cardapio')}
              className="text-left text-foreground hover:text-primary transition-colors font-semibold py-2"
            >
              Cardápio
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-left text-foreground hover:text-primary transition-colors font-semibold py-2"
            >
              Contato
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
