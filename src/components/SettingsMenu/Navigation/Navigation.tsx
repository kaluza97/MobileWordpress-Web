'use client';
import { useContext, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Formik } from 'formik';
import {
  addButtonStyles,
  checkButtonStyles,
  container,
  formContainer,
  sectionText,
} from '@/components/SettingsMenu/Navigation/Navigation.styles';
import { SettingsForm } from '@/components/SettingsMenu/Navigation/SettingsForm/SettingsForm';
import { MessageType } from '@/context/Messages/Message.types';
import { MessageContext } from '@/context/Messages/Message';
import { fetchSaveSettings } from '@/services/Settings/fetchSettings';
import { FormValues } from '@/services/Settings/fetchSettings.types';
import CheckIcon from '@mui/icons-material/Check';

const MAX_SECTIONS = 6;

export const Navigation = () => {
  const { setMessage } = useContext(MessageContext);
  const [sections, setSections] = useState<Array<FormValues>>([
    { name: '', icon: '', view: '' },
  ]);

  const addSection = () => {
    if (sections.length < MAX_SECTIONS) {
      setSections([...sections, { name: '', icon: '', view: '' }]);
    }
  };

  const handleSectionSubmit = async (values: FormValues, index: number) => {
    try {
      await fetchSaveSettings(values);
      setMessage(`Section ${index + 1} saved correctly.`, MessageType.Success);
    } catch (error) {
      setMessage(`Error saving section ${index + 1}.`, MessageType.Error);
    }
  };

  const renderSections = () =>
    sections.map((section, index) => (
      <Formik
        key={index}
        initialValues={section}
        onSubmit={(values) => handleSectionSubmit(values, index)}
        enableReinitialize
      >
        {({ handleSubmit, values, handleChange }) => (
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            sx={formContainer}
          >
            <Typography sx={sectionText}>
              {index + 1} / {MAX_SECTIONS}
            </Typography>
            <SettingsForm values={values} onChange={handleChange} />
          </Box>
        )}
      </Formik>
    ));

  return (
    <Box sx={container}>
      <Button
        type="submit"
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
      {renderSections()}
    </Box>
  );
};
