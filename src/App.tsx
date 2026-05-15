import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/HomeTemp'; 
import { Hardware } from './pages/Hardware';
import { Architecture } from './pages/Architecture';
import { Specsheet } from './pages/Specsheet';
import { About } from './pages/About';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart'; // New Page
import { Wishlist } from './pages/Wishlist'; // New Page
import { Checkout } from './pages/Checkout'; // Import the new page
import { Success } from './pages/Success';

export default function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Navigation />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/success" element={<Success />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/" element={<Home />} />
              <Route path="/hardware" element={<Hardware />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/specs" element={<Specsheet />} />
              <Route path="/about" element={<About />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              
              {/* New Logistics Routes */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </StoreProvider>
  );
}