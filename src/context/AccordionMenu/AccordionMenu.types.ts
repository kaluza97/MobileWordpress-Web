import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface AccordionContextType {
  editedItem: string;
  setEditedItem: Dispatch<SetStateAction<string>>;
  editMode: string | null;
  setEditMode: Dispatch<SetStateAction<string | null>>;
  views: Array<{ _id: string; name: string }>;
  setViews: Dispatch<SetStateAction<Array<{ _id: string; name: string }>>>;
}

export interface AccordionContextProviderProps {
  children: ReactNode;
}
