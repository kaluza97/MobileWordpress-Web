import { Dispatch, SetStateAction } from 'react';

export interface ErrorMessageType {
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  clearErrorMessage: () => void;
}
