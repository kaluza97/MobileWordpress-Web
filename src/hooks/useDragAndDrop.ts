import { useContext, useState } from 'react';
import { DragEndEvent } from '@dnd-kit/core';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';
import { MessageContext } from '@/context/Messages/Message';
import { MessageType } from '@/context/Messages/Message.types';
import { DraggableComponentType } from '@/components/DragAndDrop/DragAndDrop.types';

export type DroppedItemsState = {
  headerState: string;
  contentState: string;
  bottomNavigationState: string;
};

export const useDragAndDrop = () => {
  const [droppedItems, setDroppedItems] = useState<DroppedItemsState>({
    headerState: '',
    contentState: '',
    bottomNavigationState: '',
  });
  const { setIsSettingsMenuActive } = useContext(SettingsMenuContext);
  const { setMessage, clearMessage } = useContext(MessageContext);

  const handleInvalidDrop = (droppedItemType: string, acceptType: string) => {
    setIsSettingsMenuActive(false);
    setMessage(
      `Invalid drop: ${droppedItemType} cannot be placed in ${acceptType} area.`,
      MessageType.Error
    );
  };

  const clearHeaderSection = () => {
    setDroppedItems((prevItems) => ({
      ...prevItems,
      headerState: '',
    }));
  };

  const clearContentSection = () => {
    setDroppedItems((prevItems) => ({
      ...prevItems,
      contentState: '',
    }));
  };

  const clearBottomNavigationSection = () => {
    setDroppedItems((prevItems) => ({
      ...prevItems,
      bottomNavigationState: '',
    }));
  };

  const handleDragEnd = ({ over, active }: DragEndEvent) => {
    const droppedItem = active?.data?.current?.name;
    const droppedItemType = active?.data?.current?.type;
    const acceptType = over?.data?.current?.accepts;

    if (acceptType === droppedItemType) {
      switch (droppedItemType) {
        case DraggableComponentType.Header:
          setDroppedItems((prevItems) => ({
            ...prevItems,
            headerState: droppedItem,
          }));
          clearMessage();
          break;
        case DraggableComponentType.Content:
          setDroppedItems((prevItems) => ({
            ...prevItems,
            contentState: droppedItem,
          }));
          clearMessage();
          break;
        case DraggableComponentType.BottomNavigation:
          setDroppedItems((prevItems) => ({
            ...prevItems,
            bottomNavigationState: droppedItem,
          }));
          clearMessage();
          break;
        default:
          handleInvalidDrop(droppedItemType, acceptType);
      }
    } else {
      handleInvalidDrop(droppedItemType, acceptType);
    }
  };

  return {
    droppedItems,
    setDroppedItems,
    handleDragEnd,
    clearHeaderSection,
    clearContentSection,
    clearBottomNavigationSection,
  };
};
