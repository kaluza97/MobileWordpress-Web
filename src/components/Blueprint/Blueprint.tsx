"use client"
import { Box } from "@mui/material";
import { CardMedia } from '@mui/material';
import { container, content, footer, header, phoneContainer, phoneContent } from "./Blueprint.styles";
import Smartphone from "/public/phone.png";
import Image from 'next/image';


export const Blueprint = () => {

    return (
        <CardMedia image="/blueprint.jpg" sx={container}>
            <Box sx={phoneContainer}>
                <Image
                    priority
                    src={Smartphone}
                    alt="Smartphone frame"
                    width={250}
                    height={500}
                />
                <Box sx={phoneContent}>
                    <Box sx={header}>Header</Box>
                    <Box sx={content}>Content
                    </Box>
                    <Box sx={footer}>Footer</Box>
                </Box>
            </Box>
        </CardMedia>
    );
};
