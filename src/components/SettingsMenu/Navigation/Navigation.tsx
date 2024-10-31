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
import { fetchNavigation, fetchSaveNavigation } from '@/services/Settings/fetchSettings';

const MAX_SECTIONS = 6;

export const Navigation = () => {
  const initialMenuObject: FormValues = { name: '', icon: '', view: '' };
  const [formValues, setFormValues] = useState<Array<FormValues>>([initialMenuObject]);


  useEffect(() => {
    const fetchData = async () => {
      const navigationData = await fetchNavigation();
      setFormValues(navigationData.length ? navigationData : [initialMenuObject]);
    };
    fetchData();
  }, []);


  useEffect(() => {
    console.log(formValues, 'formValues')
  }, [formValues]);


  const addSection = () => {
    if (formValues.length < MAX_SECTIONS) {
      setFormValues((prevValues) => [...prevValues, initialMenuObject]);
    }
  };

  const handleConfirm = async () => {
    try {
      const savedData = await fetchSaveNavigation(formValues);
      console.log('Navigation updated successfully:', savedData);
    } catch (error) {
      console.error('Error updating navigation:', error);
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