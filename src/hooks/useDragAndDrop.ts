import { useContext, useState } from 'react';
import { DragEndEvent } from '@dnd-kit/core';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';
import { MessageContext } from '@/context/Messages/Message';
import { MessageType } from '@/context/Messages/Message.types';
import { DraggableComponentType } from '@/components/DragAndDrop/DragAndDrop.types';
import { DroppedItemsState } from '@/hooks/useDragAndDrop.types';

export const useDragAndDrop = () => {
  const [droppedItems, setDroppedItems] = useState<DroppedItemsState>({
    headerState: '',
    contentState: '',
    navigationState: '',
  });
  const { setActiveSettingsMenu } = useContext(SettingsMenuContext);
  const { setMessage, clearMessage } = useContext(MessageContext);

  const handleInvalidDrop = (droppedItemType: string, acceptType: string) => {
    setActiveSettingsMenu({ type: null, name: '' });
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

  const clearNavigationSection = () => {
    setDroppedItems((prevItems) => ({
      ...prevItems,
      navigationState: '',
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
        case DraggableComponentType.Navigation:
          setDroppedItems((prevItems) => ({
            ...prevItems,
            navigationState: droppedItem,
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
    handleDragEnd,
    clearHeaderSection,
    clearContentSection,
    clearNavigationSection,
  };
};
