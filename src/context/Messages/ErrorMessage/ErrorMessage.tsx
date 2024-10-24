import React, { createContext, useState, ReactNode } from 'react';
import { ErrorMessageType } from './ErrorMessage.types';

export const ErrorMessageContext = createContext<ErrorMessageType>({
  errorMessage: '',
  setErrorMessage: () => {},
  clearErrorMessage: () => {},
});

interface ErrorMessageContextProviderProps {
  children: ReactNode;
}

const ErrorMessageContextProvider = ({
  children,
}: ErrorMessageContextProviderProps) => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const clearErrorMessage = () => {
    setErrorMessage('');
  };

  return (
    <ErrorMessageContext.Provider
      value={{
        errorMessage,
        setErrorMessage,
        clearErrorMessage,
      }}
    >
      {children}
    </ErrorMessageContext.Provider>
  );
};

export { ErrorMessageContextProvider };
