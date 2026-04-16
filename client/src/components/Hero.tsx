import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663041665154/TpTS7wCoqVWBNGqE6YSZGa/calamari-hero-banner-bp72WNpeAmhec43VcDMmvq.webp)',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
          Pizzaria Calamari
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Autêntica Pizza Italiana com Ingredientes Frescos
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
          Bem-vindo à nossa pizzaria, onde tradição encontra excelência culinária. Cada pizza é feita com paixão e ingredientes selecionados.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection('cardapio')}
            className="pizza-button bg-primary hover:bg-red-700 text-white"
          >
            Ver Cardápio
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="pizza-button-secondary bg-secondary hover:bg-green-700 text-white"
          >
            Fale Conosco
          </button>
        </div>

        {/* Scroll Indicator 
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>*/}
      </div>
    </section>
  );
}
