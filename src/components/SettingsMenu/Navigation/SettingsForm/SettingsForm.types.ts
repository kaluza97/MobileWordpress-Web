import { ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { FormValues } from '@/services/Settings/fetchSettings.types';

export interface SettingsFormProps {
  values: FormValues;
  onChange: (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => void;
  index: number;
  maxSections: number;
}
