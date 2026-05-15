import { createContext, useContext, useState, type ReactNode } from 'react';

interface Watch {
  id: string;
  name: string;
  price: string;
  image: string;
  variant: string;
}

interface StoreContextType {
  cart: Watch[];
  wishlist: Watch[];
  addToCart: (item: Watch) => void;
  removeFromCart: (id: string) => void;
  toggleWishlist: (item: Watch) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Watch[]>([]);
  const [wishlist, setWishlist] = useState<Watch[]>([]);

  const addToCart = (item: Watch) => setCart(prev => [...prev, item]);
  
  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const toggleWishlist = (item: Watch) => {
    setWishlist(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) return prev.filter(i => i.id !== item.id);
      return [...prev, item];
    });
  };

  return (
    <StoreContext.Provider value={{ cart, wishlist, addToCart, removeFromCart, toggleWishlist }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within a StoreProvider");
  return context;
}