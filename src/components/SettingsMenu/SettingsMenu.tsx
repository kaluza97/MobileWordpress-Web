'use client';
import { Card, Typography } from '@mui/material';
import {
  container,
  titleText,
} from '@/components/SettingsMenu/SettingsMenu.styles';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';
import { useContext } from 'react';
import { BottomNavigation } from '@/components/SettingsMenu/BottomNavigation/BottomNavigation';

export const SettingsMenu = () => {
  const { isSettingsMenuActive } = useContext(SettingsMenuContext);

  const SettingsSections = [{ sectionId: '1' }, { sectionId: '2' }];

  return (
    <Card sx={container}>
      <Typography sx={titleText}>Settings</Typography>
      {isSettingsMenuActive ? (
        <BottomNavigation SettingsSections={SettingsSections} />
      ) : (
        <Typography>
          Inactive settings. Please choose one of the "Components" and drag to
          phone section. After dragging the appropriate section, click on it to
          open the Settings menu
        </Typography>
      )}
    </Card>
  );
};
