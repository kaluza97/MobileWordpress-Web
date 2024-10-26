'use client';
import { Box } from '@mui/material';
import { AccordionMenu } from '@/components/AccordionMenu/AccordionMenu/AccordionMenu';
import { container } from '@/components/Sidebar/Sidebar.styles';
import { EditableAccordionMenu } from '@/components/AccordionMenu/EditableAccordionMenu/EditableAccordionMenu';
import { DraggableComponentType } from '@/components/DragAndDrop/DragAndDrop.types';

export const Sidebar = () => {
    const mockedComponents = [
        { _id: '1', name: DraggableComponentType.Header, type: DraggableComponentType.Header },
        { _id: '2', name: DraggableComponentType.Content, type: DraggableComponentType.Content },
        {
            _id: '3',
            name: DraggableComponentType.BottomNavigation,
            type: DraggableComponentType.BottomNavigation,
        },
    ];

    return (
        <Box sx={container}>
            <AccordionMenu
                title="Components"
                menuItems={mockedComponents}
            />
            <EditableAccordionMenu title="Views" />
        </Box>
    );
};
