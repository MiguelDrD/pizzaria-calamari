import { useState } from 'react';
import { X } from 'lucide-react';

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663041665154/TpTS7wCoqVWBNGqE6YSZGa/calamari-margherita-pizza-ATCKdnT34Yj7PHwpZ9teTG.webp',
      alt: 'Pizza Margherita',
      title: 'Pizza Margherita',
      size: 'md:col-span-2 md:row-span-2',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663041665154/TpTS7wCoqVWBNGqE6YSZGa/calamari-pepperoni-pizza-DBmfXzrkaeMHr9YG3yTqEm.webp',
      alt: 'Pizza Pepperoni',
      title: 'Pizza Pepperoni',
      size: 'md:col-span-1 md:row-span-1',
    },
    {
      src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663041665154/TpTS7wCoqVWBNGqE6YSZGa/calamari-quattro-formaggi-EyyYFsKpbjgUrZze86bXe6.webp',
      alt: 'Pizza Quattro Formaggi',
      title: 'Pizza Quattro Formaggi',
      size: 'md:col-span-1 md:row-span-1',
    },
    {
      src: 'src/images/pizzaria-interior.png',
      alt: 'Interior da Pizzaria',
      title: 'Interior da Pizzaria',
      size: 'md:col-span-2 md:row-span-1',
    },
  ];

  return (
    <section id="galeria" className="section-padding bg-card">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Galeria
            </span>
          </div>
          <h2 className="pizza-heading">Conheça Nossa Pizzaria</h2>
          <p className="pizza-text max-w-2xl mx-auto">
            Veja as imagens de nossas deliciosas pizzas e do ambiente acolhedor da Pizzaria Calamari.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-max">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.size} pizza-card overflow-hidden cursor-pointer fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Imagem */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-primary hover:bg-red-700 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
