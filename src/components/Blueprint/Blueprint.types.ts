import { SxProps } from '@mui/material';
import {
  DraggableComponentNames,
  DraggableComponentType,
} from '../DragAndDrop/DragAndDrop.types';

export interface BlueprintProps {
  droppedItems: {
    headerState: string;
    contentState: string;
    navigationState: string;
  };
  clearHeaderSection: () => void;
  clearContentSection: () => void;
  clearNavigationSection: () => void;
  isNavigationHidden: boolean;
}

export interface BlueprintSectionsType {
  sx: SxProps;
  title: DraggableComponentNames;
  item: string;
  type: DraggableComponentType;
  borderRadius: string;
  removeFunction: () => void;
  isNavigationHidden?: boolean;
}
