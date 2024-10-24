'use client';
import { useContext, useState } from 'react';
import { Blueprint } from '@/components/Blueprint/Blueprint';
import { Header } from '@/components/Header/Header';
import { SettingsMenu } from '@/components/SettingsMenu/SettingsMenu';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { DragEndEvent, DndContext } from '@dnd-kit/core';
import { Box } from '@mui/material';
import { container } from '@/app/page.styles';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';
import { ErrorMessage } from '@/components/Messages/ErrorMessage/ErrorMessage';
import { ErrorMessageContext } from '@/context/Messages/ErrorMessage/ErrorMessage';
import { SuccessMessage } from '@/components/Messages/SuccessMessage/SuccessMessage';

export default function Home() {
  const [droppedItemName, setDroppedItemName] = useState('');
  const { setIsSettingsActive } = useContext(SettingsMenuContext);
  const { setErrorMessage, clearErrorMessage } =
    useContext(ErrorMessageContext);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;

    if (over?.data?.current && active?.data?.current) {
      const accepts = over.data.current.accepts;
      const type = active.data.current.type;

      if (accepts.includes(type)) {
        const droppedName = active.data.current?.name;
        setDroppedItemName(droppedName || '');
        clearErrorMessage();
      } else {
        setDroppedItemName('');
        setIsSettingsActive(false);
        setErrorMessage(
          'This component type is not valid for this section on the phone!'
        );
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Header />
      <SuccessMessage />
      <ErrorMessage />
      <Box sx={container}>
        <Sidebar />
        <Blueprint droppedItemName={droppedItemName} />
        <SettingsMenu />
      </Box>
    </DndContext>
  );
}
