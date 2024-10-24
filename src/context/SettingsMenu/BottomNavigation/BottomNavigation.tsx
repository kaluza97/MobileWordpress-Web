import React, { createContext, useState, ReactNode } from 'react';
import { BottomNavigationContextType } from '@/context/SettingsMenu/BottomNavigation/BottomNavigation.types';

export const BottomNavigationContext =
  createContext<BottomNavigationContextType>({
    isSettingsActive: false,
    setIsSettingsActive: () => {},
  });

interface BottomNavigationContextProviderProps {
  children: ReactNode;
}

const BottomNavigationContextProvider = ({
  children,
}: BottomNavigationContextProviderProps) => {
  const [isSettingsActive, setIsSettingsActive] = useState(false);

  return (
    <BottomNavigationContext.Provider
      value={{ isSettingsActive, setIsSettingsActive }}
    >
      {children}
    </BottomNavigationContext.Provider>
  );
};

export { BottomNavigationContextProvider };
