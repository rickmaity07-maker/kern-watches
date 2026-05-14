import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Featured } from './components/Featured';
import { Specs } from './components/Specs';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Featured />
        <Specs />
      </main>
      <Footer />
    </div>
  );
}