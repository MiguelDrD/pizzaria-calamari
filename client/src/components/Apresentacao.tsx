import { Utensils, Clock, Award, Users } from 'lucide-react';

export default function Apresentacao() {
  const features = [
    {
      icon: Utensils,
      title: 'Ingredientes Frescos',
      description: 'Utilizamos apenas ingredientes de primeira qualidade.',
    },
    {
      icon: Clock,
      title: 'Atendimento Rápido',
      description: 'Nossas pizzas são preparadas em minutos, sem comprometer a qualidade.',
    },
    {
      icon: Award,
      title: 'Receitas Autênticas',
      description: 'Seguimos receitas tradicionais passadas por gerações de mestres pizzaiolos.',
    },
    {
      icon: Users,
      title: 'Ambiente Acolhedor',
      description: 'Um espaço perfeito para reunir família e amigos em momentos especiais.',
    },
  ];

  return (
    <section id="apresentacao" className="section-padding bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Bem-vindo à Pizzaria Calamari
            </span>
          </div>
          <h2 className="pizza-heading">Tradição em Cada Fatia</h2>
          <p className="pizza-text max-w-2xl mx-auto">
            Desde 2010, a Pizzaria Calamari oferece a experiência autêntica de uma pizzaria. 
            Nosso compromisso é servir pizzas de qualidade superior, preparadas com paixão e dedicação.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="pizza-card bg-card p-8 text-center fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: 'Montserrat' }}>
                  {feature.title}
                </h3>
                <p className="text-foreground/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h3 className="pizza-subheading">Nossa História</h3>
            <p className="pizza-text mb-4">
              A Pizzaria Calamari nasceu da paixão pela gastronomia italiana autêntica e do compromisso em 
              oferecer a melhor experiência aos nossos clientes. Desde o início, acreditamos que uma pizza de 
              qualidade é resultado de três elementos fundamentais: ingredientes frescos e selecionados, técnica 
              tradicional e dedicação ao ofício.
            </p>
            <p className="pizza-text mb-4">
              Ao longo dos anos, nos consolidamos como referência em qualidade e sabor, construindo um relacionamento 
              de confiança e respeito com nossa comunidade. Cada pizza que preparamos carrega o nosso compromisso com 
              a excelência e o cuidado em cada detalhe.
            </p>
            <p className="pizza-text">
              Venha nos visitar e experimente a diferença que a qualidade e a paixão fazem em cada prato.
            </p>
          </div>
          <div className="pizza-card overflow-hidden fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img
              src="src/images/pizzaria-interior.png"
              alt="Interior da Pizzaria Calamari"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
