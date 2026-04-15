import { ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';

interface Pizza {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  categoria: string;
  ingredientes: string[];
  favorita?: boolean;
}

export default function Cardapio() {
  const [favoritas, setFavoritas] = useState<number[]>([]);
  const [filtro, setFiltro] = useState<string>('todas');

  const pizzas: Pizza[] = [
    {
      id: 1,
      nome: 'Margherita',
      descricao: 'A clássica pizza italiana com molho de tomate, mozzarella fresca e manjericão.',
      preco: 45.90,
      imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663041665154/TpTS7wCoqVWBNGqE6YSZGa/calamari-margherita-pizza-ATCKdnT34Yj7PHwpZ9teTG.webp',
      categoria: 'classica',
      ingredientes: ['Molho de Tomate', 'Mozzarella', 'Manjericão', 'Azeite'],
    },
    {
      id: 2,
      nome: 'Pepperoni',
      descricao: 'Pizza com molho de tomate, mozzarella e fatias de pepperoni crocante.',
      preco: 52.90,
      imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663041665154/TpTS7wCoqVWBNGqE6YSZGa/calamari-pepperoni-pizza-DBmfXzrkaeMHr9YG3yTqEm.webp',
      categoria: 'classica',
      ingredientes: ['Molho de Tomate', 'Mozzarella', 'Pepperoni', 'Orégano'],
    },
    {
      id: 3,
      nome: 'Quattro Formaggi',
      descricao: 'Uma mistura deliciosa de quatro queijos: mozzarella, gorgonzola, parmesan e ricota.',
      preco: 58.90,
      imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663041665154/TpTS7wCoqVWBNGqE6YSZGa/calamari-quattro-formaggi-EyyYFsKpbjgUrZze86bXe6.webp',
      categoria: 'especial',
      ingredientes: ['Mozzarella', 'Gorgonzola', 'Parmesan', 'Ricota'],
    },
    {
      id: 4,
      nome: 'Vegetariana',
      descricao: 'Pizza com molho de tomate, mozzarella, tomate, cebola, pimentão e azeitona.',
      preco: 48.90,
      imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663041665154/TpTS7wCoqVWBNGqE6YSZGa/calamari-hero-banner-bp72WNpeAmhec43VcDMmvq.webp',
      categoria: 'vegetariana',
      ingredientes: ['Molho de Tomate', 'Mozzarella', 'Tomate', 'Cebola', 'Pimentão', 'Azeitona'],
    },
    {
      id: 5,
      nome: 'Carbonara',
      descricao: 'Pizza com molho branco, mozzarella, bacon, ovo e parmesan.',
      preco: 54.90,
      imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663041665154/TpTS7wCoqVWBNGqE6YSZGa/calamari-hero-banner-bp72WNpeAmhec43VcDMmvq.webp',
      categoria: 'especial',
      ingredientes: ['Molho Branco', 'Mozzarella', 'Bacon', 'Ovo', 'Parmesan'],
    },
    {
      id: 6,
      nome: 'Frutos do Mar',
      descricao: 'Pizza com molho de tomate, mozzarella, camarão, lula e peixe fresco.',
      preco: 64.90,
      imagem: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663041665154/TpTS7wCoqVWBNGqE6YSZGa/calamari-hero-banner-bp72WNpeAmhec43VcDMmvq.webp',
      categoria: 'premium',
      ingredientes: ['Molho de Tomate', 'Mozzarella', 'Camarão', 'Lula', 'Peixe'],
    },
  ];

  const categorias = [
    { id: 'todas', nome: 'Todas' },
    { id: 'classica', nome: 'Clássicas' },
    { id: 'especial', nome: 'Especiais' },
    { id: 'vegetariana', nome: 'Vegetarianas' },
    { id: 'premium', nome: 'Premium' },
  ];

  const toggleFavorita = (id: number) => {
    setFavoritas((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const pizzasFiltradas =
    filtro === 'todas' ? pizzas : pizzas.filter((p) => p.categoria === filtro);

  return (
    <section id="cardapio" className="section-padding bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Cardápio
            </span>
          </div>
          <h2 className="pizza-heading">Nossas Pizzas</h2>
          <p className="pizza-text max-w-2xl mx-auto">
            Escolha entre nossas deliciosas opções de pizzas, todas preparadas com ingredientes 
            frescos e receitas autênticas italianas.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in-up">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFiltro(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filtro === cat.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-foreground border-2 border-primary hover:border-primary/50'
              }`}
            >
              {cat.nome}
            </button>
          ))}
        </div>

        {/* Grid de Pizzas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzasFiltradas.map((pizza, index) => (
            <div
              key={pizza.id}
              className="pizza-card bg-card overflow-hidden fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Imagem */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={pizza.imagem}
                  alt={pizza.nome}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <button
                  onClick={() => toggleFavorita(pizza.id)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-all duration-300 shadow-lg"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      favoritas.includes(pizza.id)
                        ? 'fill-primary text-primary'
                        : 'text-foreground'
                    }`}
                  />
                </button>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3
                  className="text-2xl font-bold text-foreground mb-2"
                  style={{ fontFamily: 'Montserrat' }}
                >
                  {pizza.nome}
                </h3>
                <p className="text-foreground/70 text-sm mb-4">{pizza.descricao}</p>

                {/* Ingredientes */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-primary uppercase mb-2">Ingredientes:</p>
                  <div className="flex flex-wrap gap-2">
                    {pizza.ingredientes.map((ing, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Preço e Botão */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-foreground/60">Preço</p>
                    <p className="text-2xl font-bold text-primary">
                      R$ {pizza.preco.toFixed(2)}
                    </p>
                  </div>
                  <button className="pizza-button bg-primary hover:bg-red-700 text-white flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="hidden sm:inline">Pedir</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
