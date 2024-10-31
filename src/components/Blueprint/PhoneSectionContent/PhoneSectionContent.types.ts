import { DraggableComponentType } from '@/components/DragAndDrop/DragAndDrop.types';

export interface PhoneSectionContentProps {
  borderRadius?: string;
  itemName: string;
  itemType: DraggableComponentType;
  removeDroppedItem: () => void;
}
