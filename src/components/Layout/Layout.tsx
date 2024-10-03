import { FC } from 'react';
import { LayoutProps } from './Layout.types';
import { Box } from '@mui/material';
import { container } from './Layout.styles';
import { Sidebar } from '../Sidebar/Sidebar';

export const Layout: FC<LayoutProps> = ({ content }) => (
    <Box sx={container}>
        <Sidebar />
        {content}
    </Box>
);