import { FC } from 'react';
import { LayoutProps } from './Layout.types';
import { Box } from '@mui/material';
import { container } from './Layout.styles';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';
import { SettingsMenu } from '../SettingsMenu/SettingsMenu';

export const Layout: FC<LayoutProps> = ({ content }) => (
    <>
        <Header />
        <Box sx={container}>
            <Sidebar />
            {content}
            <SettingsMenu />
        </Box>
    </>
);