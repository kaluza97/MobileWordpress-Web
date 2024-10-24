'use client';
import { Box, IconButton, Typography } from '@mui/material';
import {
  clickableBox,
  iconBox,
  iconText,
  text,
} from '@/components/Blueprint/PhoneComponents/BottomNavigation.styles';
import { useContext } from 'react';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';
import DeleteIcon from '@mui/icons-material/Delete';

export const BottomNavigation = () => {
  const { isSettingsActive, setIsSettingsActive } =
    useContext(SettingsMenuContext);

  const handleActiveSetting = () => {
    setIsSettingsActive(true);
  };

  return (
    <Box onClick={handleActiveSetting} sx={clickableBox}>
      {isSettingsActive ? (
        <IconButton sx={iconBox}>
          <DeleteIcon />
          <Typography sx={iconText}>nazwa</Typography>
        </IconButton>
      ) : (
        <Typography sx={text}>Click to active menu</Typography>
      )}
    </Box>
  );
};
