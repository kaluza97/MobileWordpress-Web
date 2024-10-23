import React, { createContext, useState, ReactNode } from 'react';
import { ErrorMessageType } from './ErrorMessage.types';

export const ErrorMessageContext = createContext<ErrorMessageType>({
  errorMessage: '',
  setErrorMessage: () => {},
});

interface ErrorMessageContextProviderProps {
  children: ReactNode;
}

const ErrorMessageContextProvider = ({
  children,
}: ErrorMessageContextProviderProps) => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  return (
    <ErrorMessageContext.Provider
      value={{
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </ErrorMessageContext.Provider>
  );
};

export { ErrorMessageContextProvider };
