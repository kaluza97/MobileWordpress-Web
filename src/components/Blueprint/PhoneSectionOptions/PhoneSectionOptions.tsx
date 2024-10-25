'use client';
import { Box, IconButton, Typography } from '@mui/material';
import {
  clickableBox,
  iconBox,
  iconText,
} from '@/components/Blueprint/PhoneSectionOptions/PhoneSectionOptions.styles';
import { useContext } from 'react';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/Clear';
import { useDragAndDrop } from '@/hooks/useDragAndDrop';

export const PhoneSectionOptions = () => {
  const { setIsSettingsMenuActive } = useContext(SettingsMenuContext);
  const { setDroppedItemName } = useDragAndDrop();

  const handleActiveSetting = () => {
    setIsSettingsMenuActive(true);
  };

  const handleClearElement = () => {
    setIsSettingsMenuActive(false);
    setDroppedItemName('');
  };

  return (
    <Box sx={clickableBox}>
      <IconButton sx={iconBox} onClick={handleClearElement}>
        <ClearIcon />
        <Typography sx={iconText}>Clear</Typography>
      </IconButton>
      <IconButton sx={iconBox} onClick={handleActiveSetting}>
        <VisibilityIcon />
        <Typography sx={iconText}>Settings</Typography>
      </IconButton>
    </Box>
  );
};
