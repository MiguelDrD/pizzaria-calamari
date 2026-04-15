import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { MapView } from './Map';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio
    console.log('Formulário enviado:', formData);
    setEnviado(true);
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
    setTimeout(() => setEnviado(false), 3000);
  };

  const informacoes = [
    {
      icon: MapPin,
      titulo: 'Endereço',
      conteudo: 'Parque Dos Desejos - R. dos Sonhos, quadra 7 lote 14 - Ubas, Iguaba Grande',
      link: 'https://maps.google.com/?q=Pizzaria+Calamari',
    },
    {
      icon: Phone,
      titulo: 'Telefone',
      conteudo: '(21)98245-8794',
      link: 'tel:+551130001234',
    },
    {
      icon: Mail,
      titulo: 'Email',
      conteudo: 'contato@pizzariacalamari.com.br',
      link: 'mailto:contato@pizzariacalamari.com.br',
    },
    {
      icon: Clock,
      titulo: 'Horário',
      conteudo: 'Sex-Seg: 18:00 - 23:00',
      link: null,
    },
  ];

  return (
    <section id="contato" className="section-padding bg-card">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Contato
            </span>
          </div>
          <h2 className="pizza-heading">Fale Conosco</h2>
          <p className="pizza-text max-w-2xl mx-auto">
            Estamos aqui para atender você! Entre em contato conosco para reservas, pedidos ou dúvidas.
          </p>
        </div>

        {/* Informações e Formulário */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Informações de Contato */}
          <div className="fade-in-up">
            <h3 className="pizza-subheading mb-8">Informações de Contato</h3>

            <div className="space-y-6 mb-8">
              {informacoes.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.titulo}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/70 hover:text-primary transition-colors"
                        >
                          {info.conteudo}
                        </a>
                      ) : (
                        <p className="text-foreground/70">{info.conteudo}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Siga-nos nas Redes Sociais</h4>
              <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
               
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="pizza-subheading mb-8">Envie uma Mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:transition-colors"
                  placeholder="(11) 9999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg focus:border-primary focus:transition-colors resize-none"
                  placeholder="Sua mensagem aqui..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full pizza-button bg-primary hover:bg-red-700 text-white flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </button>

              {enviado && (
                <div className="p-4 bg-secondary/10 border-2 border-secondary text-secondary rounded-lg text-center font-semibold">
                  ✓ Mensagem enviada com sucesso!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Mapa */}
        <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="pizza-subheading mb-8 text-center">🗺️ Como Chegar</h3>
          
            {/* Mapa */}
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg pizza-card">
              <iframe
                className="w-full h-96 rounded-lg overflow-hidden shadow-lg pizza-card"
                src="https://www.google.com/maps?q=Pizzaria+Calamari&output=embed"
                title="Localização Calamari"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          
        </div>
      </div>
    </section>
  );
}
