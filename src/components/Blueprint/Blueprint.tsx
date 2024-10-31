'use client';
import { Box } from '@mui/material';
import { CardMedia } from '@mui/material';
import Image from 'next/image';
import { Droppable } from '@/components/DragAndDrop/Droppable/Droppable';
import Smartphone from '/public/phone.png';
import { DraggableComponentType } from '@/components/DragAndDrop/DragAndDrop.types';
import { BlueprintProps } from '@/components/Blueprint/Blueprint.types';
import {
  container,
  content,
  navigation,
  header,
  phoneContainer,
  phoneContent,
} from '@/components/Blueprint/Blueprint.styles';
import { PhoneSectionContent } from '@/components/Blueprint/PhoneSectionContent/PhoneSectionContent';

export const Blueprint = ({
  droppedItems,
  clearHeaderSection,
  clearContentSection,
  clearNavigationSection,
}: BlueprintProps) => {
  const { headerState, contentState, navigationState } = droppedItems;

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
      title: 'Navigation',
      item: navigationState,
      type: DraggableComponentType.Navigation,
      sx: navigation,
      borderRadius: '0 0 25px 25px',
      removeFunction: clearNavigationSection,
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
              <Box sx={sx} key={title}>
                <Droppable
                  sectionName={title}
                  item={item}
                  type={type}
                  id={type}
                  borderRadius={borderRadius}
                >
                  <PhoneSectionContent
                    borderRadius={borderRadius}
                    itemName={item}
                    itemType={type}
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
