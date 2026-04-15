import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Apresentacao from '@/components/Apresentacao';
import Galeria from '@/components/Galeria';
import Cardapio from '@/components/Cardapio';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Apresentacao />
        <Galeria />
        <Cardapio />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
