'use client';

import { Box, Typography } from '@mui/material';
import { container, titleText } from './TitleBox.styles';

interface TitleBoxProps {
  title: string;
}

export const TitleBox = ({ title }: TitleBoxProps) => (
  <Box sx={container}>
    <Typography sx={titleText}>{title}</Typography>
  </Box>
);
