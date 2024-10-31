'use client';
import { Box, Typography } from '@mui/material';
import {
  container,
  titleText,
} from '@/components/SettingsMenu/Header/Header.styles';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';
import { useContext } from 'react';

export const Header = () => {
  const { activeSettingsMenu } = useContext(SettingsMenuContext);

  return (
    <Box sx={container}>
      <Typography sx={titleText}>{activeSettingsMenu.name}</Typography>
    </Box>
  );
};
