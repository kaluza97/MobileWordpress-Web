import { Dispatch, SetStateAction } from 'react';

export interface BottomNavigationContextType {
  isSettingsActive: boolean;
  setIsSettingsActive: Dispatch<SetStateAction<boolean>>;
}
