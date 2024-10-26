"use client";
import { Box, IconButton, Typography } from '@mui/material';
import {
  container,
  iconBox,
  iconText,
} from '@/components/Blueprint/PhoneSectionOptions/PhoneSectionOptions.styles';
import { useContext } from 'react';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/Clear';


interface PhoneSectionOptionsProps {
  borderRadius?: string;
}

export const PhoneSectionOptions: React.FC<PhoneSectionOptionsProps> = ({
  borderRadius = '0px'
}) => {
  const { setIsSettingsMenuActive } = useContext(SettingsMenuContext);

  const handleActiveSetting = () => {
    setIsSettingsMenuActive(true);
  };

  const handleClearElement = () => {
    setIsSettingsMenuActive(false);
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
