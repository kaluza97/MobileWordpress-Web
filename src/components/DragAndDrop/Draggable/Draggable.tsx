import React, { ReactNode } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Box } from '@mui/material';

interface DraggableProps {
    children: ReactNode;
    id: string;
    name: string;
}

export function Draggable({ children, id, name }: DraggableProps) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
        data: { name },
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <Box ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </Box>
    );
}
