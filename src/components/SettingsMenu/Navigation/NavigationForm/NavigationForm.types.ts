import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { NavigationObjectType } from '@/services/Settings/fetchSettings.types';
import { SelectChangeEvent } from '@mui/material';

export interface NavigationFormProps {
  values: NavigationObjectType;
  setFormValues: Dispatch<SetStateAction<Array<NavigationObjectType>>>;
  index: number;
  maxSections: number;
}

export interface HandleChange {
  (name: keyof NavigationObjectType): (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => void;
}
