import { useContext, useState } from 'react';
import { DragEndEvent } from '@dnd-kit/core';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';
import { MessageContext } from '@/context/Messages/Message';
import { MessageType } from '@/context/Messages/Message.types';

export const useDragAndDrop = () => {
  const [droppedItemName, setDroppedItemName] = useState('');
  const { setIsSettingsMenuActive } = useContext(SettingsMenuContext);
  const { setMessage, clearMessage } = useContext(MessageContext);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;

    if (over?.data?.current && active?.data?.current) {
      const accepts = over.data.current.accepts;
      const type = active.data.current.type;

      if (accepts.includes(type)) {
        const droppedName = active.data.current?.name;
        setDroppedItemName(droppedName);
        clearMessage();
      } else {
        setDroppedItemName('');
        setIsSettingsMenuActive(false);
        setMessage(
          'This component type is not valid for this section on the phone!',
          MessageType.Error
        );
      }
    }
  };

  return {
    droppedItemName,
    handleDragEnd,
  };
};
