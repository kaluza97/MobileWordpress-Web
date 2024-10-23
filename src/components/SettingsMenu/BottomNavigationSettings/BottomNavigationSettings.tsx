"use client";
import { Box, Button, Typography } from '@mui/material';
import { container } from '@/components/SettingsMenu/BottomNavigationSettings/BottomNavigationSettings.styles';
import { SettingsForm } from './SettingsForm/SettingsForm';

export const BottomNavigationSettings = () => {

    return (
        <Box sx={container}>
            <Button>CONFIRM</Button>
            <Typography>1/5</Typography>
            <SettingsForm />
        </Box>
    );
};
