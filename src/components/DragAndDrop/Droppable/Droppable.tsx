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
  borderRadius,
}: DroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
    data: {
      accepts: type,
    },
  });

  const containerStyles = isOver ? containerOnOver : container;

  return (
    <Box
      ref={setNodeRef}
      sx={{
        ...containerStyles,
        borderRadius,
      }}
    >
      {item ? (
        children
      ) : (
        <Typography>
          {isOver ? <Typography>Drop Here</Typography> : sectionName}
        </Typography>
      )}
    </Box>
  );
};
