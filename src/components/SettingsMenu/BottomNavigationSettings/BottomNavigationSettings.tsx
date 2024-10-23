'use client';
import CheckIcon from '@mui/icons-material/Check';

import { Box, Button, Typography } from '@mui/material';
import {
  checkButtonStyles,
  container,
  sectionText,
} from '@/components/SettingsMenu/BottomNavigationSettings/BottomNavigationSettings.styles';
import { SettingsForm } from './SettingsForm/SettingsForm';

interface BottomNavigationSettingsProps {
  SettingsSections: Array<{ sectionId: string }>;
}

const handleConfirm = () => {
  console.log('ZATWIERDZONO');
};

export const BottomNavigationSettings = ({
  SettingsSections,
}: BottomNavigationSettingsProps) => {
  return (
    <Box sx={container}>
      {SettingsSections.map(({ sectionId }) => (
        <Box key={sectionId}>
          <Typography
            sx={sectionText}
          >{`${sectionId}/${SettingsSections.length}`}</Typography>
          <SettingsForm />
          <Button
            variant="contained"
            startIcon={<CheckIcon />}
            onClick={handleConfirm}
            sx={checkButtonStyles}
          >
            Confirm
          </Button>
        </Box>
      ))}
    </Box>
  );
};
