"use client"
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { container } from './SettingsMenu.styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export const SettingsMenu = () => {

    return (
        <Box sx={container}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                >
                    <Typography>Settings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};
