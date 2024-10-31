'use client';
import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import {
  container,
  titleText,
} from '@/components/SettingsMenu/Content/Content.styles';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';

export const Content = () => {
  const { activeSettingsMenu } = useContext(SettingsMenuContext);

  return (
    <Box sx={container}>
      <Typography sx={titleText}>{activeSettingsMenu.name}</Typography>
    </Box>
  );
};
