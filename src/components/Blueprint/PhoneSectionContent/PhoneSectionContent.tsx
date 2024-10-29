'use client';
import { Box, IconButton, Typography } from '@mui/material';
import {
  container,
  iconBox,
  iconText,
} from '@/components/Blueprint/PhoneSectionContent/PhoneSectionContent.styles';
import { FC, useContext } from 'react';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/Clear';
import { PhoneSectionContentProps } from '@/components/Blueprint/PhoneSectionContent/PhoneSectionContent.types';

export const PhoneSectionContent: FC<PhoneSectionContentProps> = ({
  borderRadius = '0',
  removeDroppedItem,
}) => {
  const { setIsSettingsMenuActive } = useContext(SettingsMenuContext);

  const handleActiveSetting = () => {
    setIsSettingsMenuActive(true);
  };

  const handleClearElement = () => {
    setIsSettingsMenuActive(false);
    removeDroppedItem();
  };

  return (
    <Box sx={{ ...container, borderRadius }}>
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
