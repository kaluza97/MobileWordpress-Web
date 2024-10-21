"use client"
import { Box } from '@mui/material';
import { AccordionMenu } from '@/components/AccordionMenu/AccordionMenu/AccordionMenu';
import { container } from '@/components/Sidebar/Sidebar.styles';
import { EditableAccordionMenu } from '@/components/AccordionMenu/EditableAccordionMenu/EditableAccordionMenu';


export const Sidebar = () => {

    const mockedComponents = [
        { _id: '1', name: 'Header' },
        { _id: '2', name: 'Div' },
        { _id: '3', name: 'Bottom menu' },
    ]

    return (
        <Box sx={container}>
            <AccordionMenu title='Components' menuItems={mockedComponents} isElementDraggable />
            <EditableAccordionMenu title='Views' />
        </Box>
    );
};
