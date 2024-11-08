'use client';
import { Box } from '@mui/material';
import { CardMedia } from '@mui/material';
import Image from 'next/image';
import { Droppable } from '@/components/DragAndDrop/Droppable/Droppable';
import Smartphone from '/public/phone.png';
import {
  DraggableComponentNames,
  DraggableComponentType,
} from '@/components/DragAndDrop/DragAndDrop.types';
import {
  BlueprintProps,
  BlueprintSectionsType,
} from '@/components/Blueprint/Blueprint.types';
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
  isNavigationHidden,
}: BlueprintProps) => {
  const { headerState, contentState, navigationState } = droppedItems;

  const contentBorderRadius = isNavigationHidden ? '0 0 25px 25px' : '0';

  const BlueprintSections: Array<BlueprintSectionsType> = [
    {
      sx: header,
      title: DraggableComponentNames.Header,
      item: headerState,
      type: DraggableComponentType.Header,
      borderRadius: '25px 25px 0 0',
      removeFunction: clearHeaderSection,
    },
    {
      sx: content,
      title: DraggableComponentNames.Content,
      item: contentState,
      type: DraggableComponentType.Content,
      borderRadius: contentBorderRadius,
      removeFunction: clearContentSection,
    },
    {
      sx: navigation,
      title: DraggableComponentNames.Navigation,
      item: navigationState,
      type: DraggableComponentType.Navigation,
      borderRadius: '0 0 25px 25px',
      removeFunction: clearNavigationSection,
      isNavigationHidden: isNavigationHidden,
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
            ({
              title,
              item,
              type,
              sx,
              borderRadius,
              removeFunction,
              isNavigationHidden,
            }) => (
              <>
                {!isNavigationHidden && (
                  <Box sx={{ ...sx, borderRadius }} key={title}>
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
                )}
              </>
            )
          )}
        </Box>
      </Box>
    </CardMedia>
  );
};
