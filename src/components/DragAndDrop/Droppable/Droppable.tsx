import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Box, Typography } from '@mui/material';
import {
  container,
  containerOnOver,
} from '@/components/DragAndDrop/Droppable/Droppable.styles';
import { DroppableProps } from '@/components/DragAndDrop/Droppable/Droppable.types';

export const Droppable = ({
  children,
  item,
  type,
  sectionName,
  id,
  borderRadius = '0px',

}: DroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
    data: {
      accepts: type,
    },
  });


  const isTypeCompatible = id === type;
  const containerStyles = isOver && isTypeCompatible ? containerOnOver : container


  return (
    <Box
      ref={setNodeRef}
      sx={{
        ...containerStyles,
        borderRadius,
      }}
    >      {item ? (
      children
    ) : (
      <Typography>{isOver && isTypeCompatible ? 'Drop Here' : sectionName}</Typography>
    )}
    </Box>
  );
};
