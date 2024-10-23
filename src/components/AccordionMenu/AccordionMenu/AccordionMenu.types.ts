import { DraggableComponentType } from '@/components/DragAndDrop/DragAndDrop.types';

export interface AccordionMenuType {
  title: string;
  isElementDraggable?: boolean;
  menuItems: Array<{ _id: string; name: string; type: DraggableComponentType }>;
}
