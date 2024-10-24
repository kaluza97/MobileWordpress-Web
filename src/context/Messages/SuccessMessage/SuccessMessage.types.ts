import { Dispatch, SetStateAction } from 'react';

export interface SuccessMessageType {
  successMessage: string;
  setSuccessMessage: Dispatch<SetStateAction<string>>;
}
