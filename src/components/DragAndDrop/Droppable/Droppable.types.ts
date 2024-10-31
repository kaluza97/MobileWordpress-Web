import { ReactNode } from 'react';
import { DraggableComponentType } from '@/components/DragAndDrop/DragAndDrop.types';

export interface DroppableProps {
  children: ReactNode;
  item: string;
  type: DraggableComponentType;
  sectionName: string;
  id: string;
  borderRadius?: string;
}
