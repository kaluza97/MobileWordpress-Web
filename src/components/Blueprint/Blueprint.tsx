'use client';
import { Box } from '@mui/material';
import { CardMedia } from '@mui/material';
import {
  container,
  content,
  bottomNavigation,
  header,
  phoneContainer,
  phoneContent,
} from '@/components/Blueprint/Blueprint.styles';
import { Droppable } from '@/components/DragAndDrop/Droppable/Droppable';
import Smartphone from '/public/phone.png';
import Image from 'next/image';
import { DraggableComponentType } from '../DragAndDrop/DragAndDrop.types';
import { PhoneSectionOptions } from './PhoneSectionOptions/PhoneSectionOptions';
import { BlueprintInterface } from './Blueprint.types';

export const Blueprint = ({
  droppedItems,
  clearHeaderSection,
  clearContentSection,
  clearBottomNavigationSection,
}: BlueprintInterface) => {
  const { headerState, contentState, bottomNavigationState } = droppedItems;

  const BlueprintSections = [
    {
      sx: header,
      title: 'Header',
      item: headerState,
      type: DraggableComponentType.Header,
      borderRadius: '25px 25px 0 0',
      removeFunction: clearHeaderSection,
    },
    {
      sx: content,
      title: 'Content',
      item: contentState,
      type: DraggableComponentType.Content,
      borderRadius: '0',
      removeFunction: clearContentSection,
    },
    {
      title: 'Bottom Navigation',
      item: bottomNavigationState,
      type: DraggableComponentType.BottomNavigation,
      sx: bottomNavigation,
      borderRadius: '0 0 25px 25px',
      removeFunction: clearBottomNavigationSection,
    },
  ];

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
          {BlueprintSections.map(
            ({ title, item, type, sx, borderRadius, removeFunction }) => (
              <Box sx={sx}>
                <Droppable
                  sectionName={title}
                  item={item}
                  type={type}
                  id={type}
                  borderRadius={borderRadius}
                >
                  <PhoneSectionOptions
                    borderRadius={borderRadius}
                    removeDroppedItem={removeFunction}
                  />
                </Droppable>
              </Box>
            )
          )}
        </Box>
      </Box>
    </CardMedia>
  );
};
