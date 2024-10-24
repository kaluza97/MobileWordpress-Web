import React, { createContext, useState, ReactNode } from 'react';
import { SuccessMessageType } from './SuccessMessage.types';

export const SuccessMessageContext = createContext<SuccessMessageType>({
  successMessage: '',
  setSuccessMessage: () => {},
});

interface SuccessMessageContextProviderProps {
  children: ReactNode;
}

const SuccessMessageContextProvider = ({
  children,
}: SuccessMessageContextProviderProps) => {
  const [successMessage, setSuccessMessage] = useState<string>('');

  return (
    <SuccessMessageContext.Provider
      value={{
        successMessage,
        setSuccessMessage,
      }}
    >
      {children}
    </SuccessMessageContext.Provider>
  );
};

export { SuccessMessageContextProvider };
