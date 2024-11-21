import React, { createContext, useState } from 'react';
import {
  SettingsMenuContextProviderProps,
  SettingsMenuContextType,
  SettingsMenuItem,
} from '@/context/SettingsMenu/SettingsMenu.types';

export const SettingsMenuContext = createContext<SettingsMenuContextType>({
  activeSettingsMenu: { type: null, name: '' },
  setActiveSettingsMenu: () => { },
  closeSettingsMenu: () => { },
});

const SettingsMenuContextProvider = ({
  children,
}: SettingsMenuContextProviderProps) => {
  const [activeSettingsMenu, setActiveSettingsMenu] =
    useState<SettingsMenuItem>({ type: null, name: '' });

  const closeSettingsMenu = () => {
    setActiveSettingsMenu({ type: null, name: '' })
  }

  return (
    <SettingsMenuContext.Provider
      value={{ activeSettingsMenu, setActiveSettingsMenu, closeSettingsMenu }}
    >
      {children}
    </SettingsMenuContext.Provider>
  );
};

export { SettingsMenuContextProvider };
