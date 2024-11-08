'use client';
import { FC, useContext } from 'react';
import { Box, Typography } from '@mui/material';
import {
  container,
  iconText,
  text,
} from '@/components/Blueprint/PhoneSectionContent/PhoneSectionContent.styles';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';
import { PhoneSectionContentProps } from '@/components/Blueprint/PhoneSectionContent/PhoneSectionContent.types';

export const PhoneSectionContent: FC<PhoneSectionContentProps> = ({
  borderRadius,
  itemName,
  itemType,
  removeDroppedItem,
}) => {
  const { setActiveSettingsMenu } = useContext(SettingsMenuContext);

  const handleActiveSetting = () => {
    setActiveSettingsMenu({ type: itemType, name: itemName });
  };

  const handleClearElement = () => {
    setActiveSettingsMenu({ type: null, name: '' });
    removeDroppedItem();
  };

  return (
    <Box sx={{ ...container, borderRadius }}>
      <Typography sx={text}>{itemName}</Typography>
      <Box onClick={handleClearElement}>
        <Typography sx={iconText}>Clear</Typography>
      </Box>
      <Box onClick={handleActiveSetting}>
        <Typography sx={iconText}>Settings</Typography>
      </Box>
    </Box>
  );
};
