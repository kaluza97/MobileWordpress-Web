import { ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { FormValues } from '@/services/Settings/fetchSettings.types';

export interface NavigationFormProps {
  values: FormValues;
  onChange: (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => void;
  index: number;
  maxSections: number;
}
