'use client';
import { Box } from '@mui/material';
import { AccordionMenu } from '@/components/AccordionMenu/AccordionMenu/AccordionMenu';
import { container } from '@/components/Sidebar/Sidebar.styles';
import { EditableAccordionMenu } from '@/components/AccordionMenu/EditableAccordionMenu/EditableAccordionMenu';
import { DraggableComponentType } from '@/components/DragAndDrop/DragAndDrop.types';

export const Sidebar = () => {
  const mockedComponents = [
    { _id: '1', name: 'header', type: DraggableComponentType.Header },
    { _id: '2', name: 'otherHeader', type: DraggableComponentType.Header },
    { _id: '3', name: 'Box', type: DraggableComponentType.Content },
    {
      _id: '4',
      name: 'bottomNav',
      type: DraggableComponentType.Navigation,
    },
  ];

  return (
    <Box sx={container}>
      <AccordionMenu title="Components" menuItems={mockedComponents} />
      <EditableAccordionMenu title="Views" />
    </Box>
  );
};
