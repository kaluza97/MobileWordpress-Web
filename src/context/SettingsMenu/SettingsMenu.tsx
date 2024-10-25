import React, { createContext, useState, ReactNode } from 'react';
import {
  SettingsMenuContextProviderProps,
  SettingsMenuContextType,
} from './SettingsMenu.types';

export const SettingsMenuContext = createContext<SettingsMenuContextType>({
  isSettingsMenuActive: false,
  setIsSettingsMenuActive: () => {},
});

const SettingsMenuContextProvider = ({
  children,
}: SettingsMenuContextProviderProps) => {
  const [isSettingsMenuActive, setIsSettingsMenuActive] = useState(false);

  return (
    <SettingsMenuContext.Provider
      value={{ isSettingsMenuActive, setIsSettingsMenuActive }}
    >
      {children}
    </SettingsMenuContext.Provider>
  );
};

export { SettingsMenuContextProvider };
