'use client';
import { useContext, useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import {
  addButtonStyles,
  checkButtonStyles,
  container,
} from '@/components/SettingsMenu/Navigation/Navigation.styles';
import { NavigationForm } from '@/components/SettingsMenu/Navigation/NavigationForm/NavigationForm';
import { FormValues } from '@/services/Settings/fetchSettings.types';
import CheckIcon from '@mui/icons-material/Check';
import {
  fetchNavigation,
  fetchSaveNavigation,
} from '@/services/Settings/fetchSettings';
import { MessageContext } from '@/context/Messages/Message';
import { MessageType } from '@/context/Messages/Message.types';

const MAX_SECTIONS = 6;

export const Navigation = () => {
  const { setMessage } = useContext(MessageContext);
  const initialMenuObject: FormValues = { name: '', icon: '', view: '' };
  const [formValues, setFormValues] = useState<Array<FormValues>>([
    initialMenuObject,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const navigationData = await fetchNavigation();
      setFormValues(
        navigationData.length ? navigationData : [initialMenuObject]
      );
    };
    fetchData();
  }, []);

  const addSection = () => {
    if (formValues.length < MAX_SECTIONS) {
      setFormValues((prevValues) => [...prevValues, initialMenuObject]);
    }
  };

  const handleConfirm = async () => {
    try {
      await fetchSaveNavigation(formValues);
      setMessage('Navigation updated successfully!', MessageType.Success);
    } catch (error) {
      setMessage('Error updating navigation.', MessageType.Error);
    }
  };

  return (
    <Box sx={container}>
      <Button
        variant="contained"
        startIcon={<CheckIcon />}
        onClick={handleConfirm}
        sx={checkButtonStyles}
      >
        Confirm
      </Button>
      <Button
        onClick={addSection}
        variant="contained"
        disabled={formValues.length >= MAX_SECTIONS}
        sx={addButtonStyles}
      >
        Add Section
      </Button>
      {formValues.map((item, id) => (
        <NavigationForm
          key={id}
          values={item}
          setFormValues={setFormValues}
          index={id}
          maxSections={MAX_SECTIONS}
        />
      ))}
    </Box>
  );
};
