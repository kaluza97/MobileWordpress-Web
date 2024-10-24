'use client';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { container } from '@/components/SettingsMenu/SettingsMenu.styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';
import { useContext } from 'react';
import { BottomNavigation } from '@/components/SettingsMenu/BottomNavigation/BottomNavigation';

export const SettingsMenu = () => {
  const { isSettingsActive } = useContext(SettingsMenuContext);

  const SettingsSections = [
    { sectionId: '1' },
    { sectionId: '2' },
    { sectionId: '3' },
    { sectionId: '4' },
  ];

  return (
    <Box sx={container}>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography>Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {isSettingsActive ? (
            <BottomNavigation SettingsSections={SettingsSections} />
          ) : (
            <Typography>
              Inactive settings. Please choose one of the "Components" and drag
              to phone section. After dragging the appropriate section, click on
              it to open the Settings menu
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
