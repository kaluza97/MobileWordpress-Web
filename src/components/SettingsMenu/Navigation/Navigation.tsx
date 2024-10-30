'use client';
import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import {
  addButtonStyles,
  checkButtonStyles,
  container,
} from '@/components/SettingsMenu/Navigation/Navigation.styles';
import { NavigationForm } from '@/components/SettingsMenu/Navigation/NavigationForm/NavigationForm';
import { FormValues } from '@/services/Settings/fetchSettings.types';
import CheckIcon from '@mui/icons-material/Check';
import { mockedBackend } from '@/constants/MockedBackend';

const MAX_SECTIONS = 6;

export const Navigation = () => {
  const initialMenuObject: FormValues = { name: '', icon: '', view: '' };
  const [formValues, setFormValues] = useState<Array<FormValues>>([initialMenuObject]);

  useEffect(() => {
    setFormValues(
      mockedBackend.navigation.length
        ? mockedBackend.navigation
        : [initialMenuObject]
    );
  }, []);

  const addSection = () => {
    if (formValues.length < MAX_SECTIONS) {
      setFormValues((prevValues) => [...prevValues, initialMenuObject]);
    }
  };

  const handleConfirm = () => {
    alert(JSON.stringify(formValues, null, 2));
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