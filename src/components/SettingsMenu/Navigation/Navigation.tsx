'use client';
import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import {
  addButtonStyles,
  checkButtonStyles,
  container,
} from '@/components/SettingsMenu/Navigation/Navigation.styles';
import { SettingsForm } from '@/components/SettingsMenu/Navigation/SettingsForm/SettingsForm';
import { FormValues } from '@/services/Settings/fetchSettings.types';
import CheckIcon from '@mui/icons-material/Check';
import { mockedBackend } from '@/constants/MockedBackend';
import { Formik } from 'formik';

const MAX_SECTIONS = 6;

export const Navigation = () => {
  const initialMenuObject: FormValues = { name: '', icon: '', view: '' };
  const [sections, setSections] = useState<Array<FormValues>>([
    initialMenuObject,
  ]);

  useEffect(() => {
    setSections(
      mockedBackend.navigation.length
        ? mockedBackend.navigation
        : [initialMenuObject]
    );
  }, []);

  const addSection = () => {
    if (sections.length < MAX_SECTIONS) {
      setSections((prevSections) => [...prevSections, initialMenuObject]);
    }
  };

  const handleSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Box sx={container}>
      <Button
        variant="contained"
        startIcon={<CheckIcon />}
        sx={checkButtonStyles}
      >
        Confirm
      </Button>
      <Button
        onClick={addSection}
        variant="contained"
        disabled={sections.length >= MAX_SECTIONS}
        sx={addButtonStyles}
      >
        Add Section
      </Button>
      {sections.map((item, id) => (
        <Formik
          key={id}
          initialValues={item}
          onSubmit={(values) => handleSubmit(values)}
          enableReinitialize
        >
          {({ values, handleChange, handleSubmit }) => (
            <Box component="form" onSubmit={handleSubmit}>
              <SettingsForm
                values={values}
                onChange={handleChange}
                index={id}
                maxSections={MAX_SECTIONS}
              />
            </Box>
          )}
        </Formik>
      ))}
    </Box>
  );
};
