import React, { ReactNode } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Box, Typography } from '@mui/material';
import { container, containerOnOver } from '@/components/DragAndDrop/Droppable/Droppable.styles';

interface DroppableProps {
    children: ReactNode;
    item: string;
}

export function Droppable({ children, item }: DroppableProps) {
    const { isOver, setNodeRef } = useDroppable({
        id: 'HEADER',
    });


    return (
        <Box ref={setNodeRef} sx={isOver ? containerOnOver : container}>
            {item ? children : <Typography>{isOver ? 'Drop Here' : 'Footer'}</Typography>}
        </Box>
    );
}
