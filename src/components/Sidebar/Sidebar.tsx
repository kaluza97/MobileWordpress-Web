'use client';
import { Box } from '@mui/material';
import { AccordionMenu } from '@/components/AccordionMenu/AccordionMenu/AccordionMenu';
import { container } from '@/components/Sidebar/Sidebar.styles';
import { EditableAccordionMenu } from '@/components/AccordionMenu/EditableAccordionMenu/EditableAccordionMenu';
import { DraggableComponentType } from '@/components/DragAndDrop/DragAndDrop.types';

export const Sidebar = () => {
  const mockedComponents = [
    { _id: '1', name: 'Header', type: DraggableComponentType.Header },
    { _id: '2', name: 'Div', type: DraggableComponentType.Content },
    {
      _id: '3',
      name: 'Bottom menu',
      type: DraggableComponentType.BottomNavigation,
    },
  ];

  return (
    <Box sx={container}>
      <AccordionMenu
        title="Components"
        menuItems={mockedComponents}
        isElementDraggable
      />
      <EditableAccordionMenu title="Views" />
    </Box>
  );
};
