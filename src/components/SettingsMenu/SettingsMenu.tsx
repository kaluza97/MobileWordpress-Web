'use client';
import { Card, Typography } from '@mui/material';
import {
  container,
  titleText,
} from '@/components/SettingsMenu/SettingsMenu.styles';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';
import { useContext } from 'react';
import { Navigation } from '@/components/SettingsMenu/Navigation/Navigation';
import { Header } from '@/components/SettingsMenu/Header/Header';
import { Content } from '@/components/SettingsMenu/Content/Content';
import { DraggableComponentType } from '../DragAndDrop/DragAndDrop.types';

export const SettingsMenu = () => {
  const { activeSettingsMenu } = useContext(SettingsMenuContext);

  const selectMenuType = () => {
    switch (activeSettingsMenu.type) {
      case DraggableComponentType.Header:
        return <Header />;
      case DraggableComponentType.Content:
        return <Content />;
      case DraggableComponentType.Navigation:
        return <Navigation />;
      default:
        return (
          <Typography>
            Inactive settings. Please choose one of the COMPONENTS and drag to
            phone section. After dragging the appropriate section, click on it
            to open the Settings menu
          </Typography>
        );
    }
  };

  return (
    <Card sx={container}>
      <Typography sx={titleText}>Settings</Typography>
      {selectMenuType()}
    </Card>
  );
};
