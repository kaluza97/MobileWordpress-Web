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
import { BottomNavigationSettings } from './BottomNavigationSettings/BottomNavigationSettings';

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
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography>Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {isSettingsActive ? (
            <BottomNavigationSettings SettingsSections={SettingsSections} />
          ) : (
            <Typography>
              Inactive settings. Please choose one of the "Components" and drag
              to phone section.
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
