import React, { useContext, useEffect } from 'react';
import { Alert } from '@mui/material';
import { MessageContext } from '@/context/Messages/Message';

export const Message = () => {
  const { message, clearMessage } = useContext(MessageContext);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        clearMessage();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    message && (
      <Alert variant="filled" severity={message.type} onClose={clearMessage}>
        {message.content}
      </Alert>
    )
  );
};
