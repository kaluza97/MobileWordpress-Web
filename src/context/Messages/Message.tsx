import React, { createContext, FC, useState } from 'react';
import {
  Message,
  MessageContextType,
  MessageContextProviderProps,
  MessageType,
} from '@/context/Messages/Message.types';

export const MessageContext = createContext<MessageContextType>({
  message: null,
  setMessage: () => {},
  clearMessage: () => {},
});

const MessageContextProvider: FC<MessageContextProviderProps> = ({
  children,
}) => {
  const [message, setMessageState] = useState<Message>(null);

  const setMessage = (content: string, type: MessageType) => {
    setMessageState({ content, type });
  };

  const clearMessage = () => {
    setMessageState(null);
  };

  return (
    <MessageContext.Provider
      value={{
        message,
        setMessage,
        clearMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContextProvider };
