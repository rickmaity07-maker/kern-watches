import React, { createContext, useContext, useState, ReactNode } from 'react';

interface StoreContextType {
  cartCount: number;
  wishlistCount: number;
  addToCart: () => void;
  toggleWishlist: (active: boolean) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const addToCart = () => setCartCount(prev => prev + 1);
  
  const toggleWishlist = (isAdded: boolean) => {
    setWishlistCount(prev => isAdded ? prev + 1 : Math.max(0, prev - 1));
  };

  return (
    <StoreContext.Provider value={{ cartCount, wishlistCount, addToCart, toggleWishlist }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within a StoreProvider");
  return context;
}