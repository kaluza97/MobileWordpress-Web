import React, { ReactNode } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Box, Typography } from '@mui/material';
import {
  container,
  containerOnOver,
} from '@/components/DragAndDrop/Droppable/Droppable.styles';
import { DroppableProps } from '@/components/DragAndDrop/Droppable/Droppable.types';

export const Droppable = ({ children, item, type }: DroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'HEADER',
    data: {
      accepts: type,
    },
  });

  return (
    <Box ref={setNodeRef} sx={isOver ? containerOnOver : container}>
      {item ? (
        children
      ) : (
        <Typography>{isOver ? 'Drop Here' : 'Footer'}</Typography>
      )}
    </Box>
  );
};
