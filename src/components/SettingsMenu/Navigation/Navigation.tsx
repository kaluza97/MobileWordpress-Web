'use client';
import { Box, Button, Typography } from '@mui/material';
import {
  checkButtonStyles,
  container,
  sectionText,
} from '@/components/SettingsMenu/Navigation/Navigation.styles';
import { SettingsForm } from '@/components/SettingsMenu/Navigation/SettingsForm/SettingsForm';
import CheckIcon from '@mui/icons-material/Check';
import { MessageType } from '@/context/Messages/Message.types';
import { useContext } from 'react';
import { MessageContext } from '@/context/Messages/Message';
import { Formik } from 'formik';
import { fetchSaveSettings } from '@/services/Settings/fetchSettings';
import { NavigationProps } from '@/components/SettingsMenu/Navigation/Navigation.types';

export const Navigation = ({ SettingsSections }: NavigationProps) => {
  const { setMessage } = useContext(MessageContext);
  const initialSettings = {
    name: '',
    icon: '',
    view: '',
  };

  const handleSubmit = async (values: {
    name: string;
    icon: string;
    view: string;
  }) => {
    try {
      await fetchSaveSettings(values);
      setMessage('Item saved correctly.', MessageType.Success);
    } catch (error) {
      setMessage('Error saving settings.', MessageType.Error);
    }
  };

  return (
    <Formik
      initialValues={initialSettings}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ handleSubmit }) => (
        <Box sx={container} component="form" onSubmit={handleSubmit}>
          <Button
            type="submit"
            variant="contained"
            startIcon={<CheckIcon />}
            sx={checkButtonStyles}
          >
            Confirm
          </Button>
          {SettingsSections.map(({ sectionId }) => (
            <Box key={sectionId}>
              <Typography sx={sectionText}>
                {`${sectionId}/${SettingsSections.length}`}
              </Typography>
              <SettingsForm />
            </Box>
          ))}
        </Box>
      )}
    </Formik>
  );
};
