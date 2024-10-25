'use client';
import { Box } from '@mui/material';
import { CardMedia } from '@mui/material';
import {
  container,
  content,
  footer,
  header,
  phoneContainer,
  phoneContent,
} from '@/components/Blueprint/Blueprint.styles';
import { Droppable } from '@/components/DragAndDrop/Droppable/Droppable';
import Smartphone from '/public/phone.png';
import Image from 'next/image';
import { DraggableComponentType } from '../DragAndDrop/DragAndDrop.types';
import { PhoneSectionOptions } from './PhoneSectionOptions/PhoneSectionOptions';

interface BlueprintInterface {
  droppedItemName: string;
}

export const Blueprint = ({ droppedItemName }: BlueprintInterface) => {
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
          <Box sx={header}>
            <Droppable
              sectionName="Header"
              item={droppedItemName}
              type={DraggableComponentType.Header}
            >
              <PhoneSectionOptions />
            </Droppable>
          </Box>
          <Box sx={content}>
            <Droppable
              sectionName="Content"
              item={droppedItemName}
              type={DraggableComponentType.Content}
            >
              <PhoneSectionOptions />
            </Droppable>
          </Box>

          <Box sx={footer}>
            <Droppable
              sectionName="Footer"
              item={droppedItemName}
              type={DraggableComponentType.BottomNavigation}
            >
              <PhoneSectionOptions />
            </Droppable>
          </Box>
        </Box>
      </Box>
    </CardMedia>
  );
};
