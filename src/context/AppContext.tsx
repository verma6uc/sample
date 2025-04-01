
import { createContext, useContext, ReactNode, useState, useCallback } from 'react';

interface AppContextType {
  isNavOpen: boolean;
  toggleNav: () => void;
  closeNav: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const toggleNav = useCallback(() => {
    setIsNavOpen((prev) => !prev);
  }, []);
  
  const closeNav = useCallback(() => {
    setIsNavOpen(false);
  }, []);
  
  return (
    <AppContext.Provider value={{ isNavOpen, toggleNav, closeNav }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
  