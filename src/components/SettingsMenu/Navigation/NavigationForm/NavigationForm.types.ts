import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { FormValues } from '@/services/Settings/fetchSettings.types';
import { SelectChangeEvent } from '@mui/material';

export interface NavigationFormProps {
  values: FormValues;
  setFormValues: Dispatch<SetStateAction<Array<FormValues>>>;
  index: number;
  maxSections: number;
}

export interface HandleChange {
  (
    name: keyof FormValues
  ): (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => void;
}
