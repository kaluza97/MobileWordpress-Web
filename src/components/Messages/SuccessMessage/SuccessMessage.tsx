import React, { useContext, useEffect } from 'react';
import { Alert } from '@mui/material';
import { SuccessMessageContext } from '@/context/Messages/SuccessMessage/SuccessMessage';

export const SuccessMessage = () => {
  const { successMessage, setSuccessMessage } = useContext(
    SuccessMessageContext
  );

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleClose = () => setSuccessMessage('');

  return (
    successMessage && (
      <Alert variant="filled" severity="success" onClose={handleClose}>
        {successMessage}
      </Alert>
    )
  );
};
