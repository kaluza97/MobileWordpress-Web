'use client';
import { Box, TextField, Typography } from '@mui/material';
import {
  container,
  titleText,
} from '@/components/SettingsMenu/Header/Header.styles';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';
import { ChangeEvent, useContext, useState } from 'react';

export const Header = () => {
  const { activeSettingsMenu } = useContext(SettingsMenuContext);
  const [headerTitle, setHeaderTitle] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHeaderTitle(event.target.value);
  }

  return (
    <Box sx={container}>
      <Typography sx={titleText}>{activeSettingsMenu.name}</Typography>
      <TextField
        name="title"
        value={headerTitle}
        onChange={onChange}
        label="Header title"
        variant="outlined"
        size="small"
        required
      />
    </Box>
  );
};
