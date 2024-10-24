'use client';
import { Box, Typography } from '@mui/material';
import {
  container,
  sectionText,
} from '@/components/SettingsMenu/BottomNavigation/BottomNavigation.styles';
import { SettingsForm } from './SettingsForm/SettingsForm';

interface BottomNavigationProps {
  SettingsSections: Array<{ sectionId: string }>;
}

export const BottomNavigation = ({
  SettingsSections,
}: BottomNavigationProps) => {
  return (
    <Box sx={container}>
      {SettingsSections.map(({ sectionId }) => (
        <Box key={sectionId}>
          <Typography sx={sectionText}>
            {`${sectionId}/${SettingsSections.length}`}
          </Typography>
          <SettingsForm />
        </Box>
      ))}
    </Box>
  );
};
