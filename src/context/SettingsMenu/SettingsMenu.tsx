import React, { createContext, useState } from 'react';
import {
  SettingsMenuContextProviderProps,
  SettingsMenuContextType,
} from '@/context/SettingsMenu/SettingsMenu.types';

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
