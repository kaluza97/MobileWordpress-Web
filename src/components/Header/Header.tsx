"use client";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Image from 'next/image';
import { appBar, container, text } from '@/components/Header/Header.styles';
import { Typography } from '@mui/material';


export const Header = () => {
    return (
        <AppBar position='static' sx={appBar}>
            <Container sx={container}>
                <Image src='/logo.png' alt='logo mobile app builder' width={70} height={70} />
                <Typography sx={text}>Mobile App Builder</Typography>
            </Container>
        </AppBar>
    );
}
