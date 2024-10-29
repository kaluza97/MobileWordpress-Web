import { DraggableComponentType } from '@/components/DragAndDrop/DragAndDrop.types';
import { ReactNode } from 'react';

export interface DraggableProps {
  children: ReactNode;
  id: string;
  name: string;
  type: DraggableComponentType;
}
