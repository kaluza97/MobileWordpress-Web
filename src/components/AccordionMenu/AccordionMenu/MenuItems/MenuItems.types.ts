import { DraggableComponentType } from '@/components/DragAndDrop/DragAndDrop.types';

export interface MenuItemsType {
  isElementDraggable?: boolean;
  menuItems: Array<{ _id: string; name: string; type: DraggableComponentType }>;
}
