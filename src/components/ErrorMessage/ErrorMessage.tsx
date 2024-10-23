import React, { useContext, useEffect } from 'react';
import { Alert } from '@mui/material';
import { ErrorMessageContext } from '@/context/ErrorMessage/ErrorMessage';

export const ErrorMessage = () => {
  const { errorMessage, setErrorMessage } = useContext(ErrorMessageContext);

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage, setErrorMessage]);

  const handleClose = () => setErrorMessage('');

  return (
    errorMessage && (
      <Alert variant="filled" severity="error" onClose={handleClose}>
        {errorMessage}
      </Alert>
    )
  );
};
