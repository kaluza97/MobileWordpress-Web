import React, { createContext, useState } from 'react';
import {
  SettingsMenuContextProviderProps,
  SettingsMenuContextType,
  SettingsMenuItem,
} from '@/context/SettingsMenu/SettingsMenu.types';

export const SettingsMenuContext = createContext<SettingsMenuContextType>({
  activeSettingsMenu: { type: null, name: '' },
  setActiveSettingsMenu: () => {},
});

const SettingsMenuContextProvider = ({
  children,
}: SettingsMenuContextProviderProps) => {
  const [activeSettingsMenu, setActiveSettingsMenu] =
    useState<SettingsMenuItem>({ type: null, name: '' });

  return (
    <SettingsMenuContext.Provider
      value={{ activeSettingsMenu, setActiveSettingsMenu }}
    >
      {children}
    </SettingsMenuContext.Provider>
  );
};

export { SettingsMenuContextProvider };
