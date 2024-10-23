import React, { ReactNode } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Box } from '@mui/material';
import { DraggableProps } from './Draggable.types';

export const Draggable = ({ children, id, name, type }: DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: {
      type: type,
      name: name,
    },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <Box ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </Box>
  );
};
