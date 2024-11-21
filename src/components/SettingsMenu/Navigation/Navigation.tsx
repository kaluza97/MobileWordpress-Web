'use client';
import { useContext, useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import {
  addButtonStyles,
  checkButtonStyles,
  container,
  titleText,
} from '@/components/SettingsMenu/Navigation/Navigation.styles';
import { NavigationForm } from '@/components/SettingsMenu/Navigation/NavigationForm/NavigationForm';
import { NavigationObjectType } from '@/services/Settings/fetchSettings.types';
import CheckIcon from '@mui/icons-material/Check';
import {
  fetchNavigation,
  saveNavigation,
} from '@/services/Settings/fetchNavigation';
import { MessageContext } from '@/context/Messages/Message';
import { MessageType } from '@/context/Messages/Message.types';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';

const MAX_SECTIONS = 6;

export const Navigation = () => {
  const { setMessage } = useContext(MessageContext);
  const { activeSettingsMenu } = useContext(SettingsMenuContext);
  const initialMenuObject: NavigationObjectType = { name: '', icon: '', view: '' };
  const [navigationItems, setNavigationItems] = useState<Array<NavigationObjectType>>([
    initialMenuObject,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const navigationData = await fetchNavigation();
      setNavigationItems(
        navigationData.length ? navigationData : [initialMenuObject]
      );
    };
    fetchData();
  }, []);

  const addSection = () => {
    if (navigationItems.length < MAX_SECTIONS) {
      setNavigationItems((prevValues) => [...prevValues, initialMenuObject]);
    }
  };

  const handleConfirm = async () => {
    try {
      await saveNavigation(navigationItems);
      setMessage('Navigation updated successfully!', MessageType.Success);
    } catch {
      setMessage('Error updating navigation.', MessageType.Error);
    }
  };

  return (
    <Box sx={container}>
      <Typography sx={titleText}>{activeSettingsMenu.name}</Typography>
      <Button
        variant="contained"
        startIcon={<CheckIcon />}
        onClick={handleConfirm}
        sx={checkButtonStyles}
      >
        Confirm
      </Button>
      <Button
        onClick={addSection}
        variant="contained"
        disabled={navigationItems.length >= MAX_SECTIONS}
        sx={addButtonStyles}
      >
        Add Section
      </Button>
      {navigationItems.map((item, id) => (
        <NavigationForm
          key={id}
          values={item}
          setFormValues={setNavigationItems}
          index={id}
          maxSections={MAX_SECTIONS}
        />
      ))}
    </Box>
  );
};
