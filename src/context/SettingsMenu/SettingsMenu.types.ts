import { DraggableComponentType } from '@/components/DragAndDrop/DragAndDrop.types';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export type SettingsMenuItem = {
  type: DraggableComponentType | null;
  name: string;
};

export interface SettingsMenuContextType {
  activeSettingsMenu: SettingsMenuItem;
  setActiveSettingsMenu: Dispatch<SetStateAction<SettingsMenuItem>>;
}

export interface SettingsMenuContextProviderProps {
  children: ReactNode;
}
