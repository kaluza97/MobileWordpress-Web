import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface SettingsMenuContextType {
  isSettingsMenuActive: boolean;
  setIsSettingsMenuActive: Dispatch<SetStateAction<boolean>>;
}

export interface SettingsMenuContextProviderProps {
  children: ReactNode;
}
