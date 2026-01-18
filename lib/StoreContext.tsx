import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, SiteSettings, CartItem, StrainType, ProductVariant } from '../types';
import { INITIAL_PRODUCTS, INITIAL_SETTINGS } from '../constants';

interface StoreContextType {
  products: Product[];
  settings: SiteSettings;
  cart: CartItem[];
  addProduct: (product: Product) => void;
  updateSettings: (settings: Partial<SiteSettings>) => void;
  addToCart: (product: Product, variant?: ProductVariant) => void;
  removeFromCart: (productId: string, variantWeight?: string) => void;
  updateQuantity: (productId: string, variantWeight: string | undefined, quantity: number) => void;
  clearCart: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider = ({ children }: { children?: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [settings, setSettings] = useState<SiteSettings>(INITIAL_SETTINGS);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Theme Controller: Updates CSS variables when settings change
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', settings.primaryColor);
    
    // Simple logic to generate darker/lighter variants
    // In a real app we might use a color manipulation library
    root.style.setProperty('--primary-dark', settings.primaryColor); 
  }, [settings.primaryColor]);

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const addToCart = (product: Product, variant?: ProductVariant) => {
    setCart((prev) => {
      // Determine the unique key for the item (id + variant)
      const existing = prev.find((item) => 
        item.id === product.id && 
        item.selectedVariant?.weight === variant?.weight
      );

      if (existing) {
        return prev.map((item) =>
          (item.id === product.id && item.selectedVariant?.weight === variant?.weight)
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      
      // If variant is selected, use its price, otherwise use product price
      const itemPrice = variant ? variant.price : product.price;
      
      return [...prev, { ...product, price: itemPrice, quantity: 1, selectedVariant: variant }];
    });
  };

  const updateQuantity = (productId: string, variantWeight: string | undefined, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) => prev.map((item) => {
        if (item.id === productId && item.selectedVariant?.weight === variantWeight) {
            return { ...item, quantity: quantity };
        }
        return item;
    }));
  };

  const removeFromCart = (productId: string, variantWeight?: string) => {
    setCart((prev) => prev.filter((item) => {
        if (item.id !== productId) return true;
        // If IDs match, check variant
        if (variantWeight) {
            return item.selectedVariant?.weight !== variantWeight;
        }
        return false; // Remove if exact match on ID and we didn't specify variant (or fallback logic)
    }));
  };

  const clearCart = () => setCart([]);

  return (
    <StoreContext.Provider
      value={{
        products,
        settings,
        cart,
        addProduct,
        updateSettings,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};