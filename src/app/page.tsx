'use client';
import { useContext, useState } from 'react';
import { Blueprint } from '@/components/Blueprint/Blueprint';
import { Header } from '@/components/Header/Header';
import { SettingsMenu } from '@/components/SettingsMenu/SettingsMenu';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { DragEndEvent, DndContext } from '@dnd-kit/core';
import { Alert, Box } from '@mui/material';
import { container } from '@/app/page.styles';
import { SettingsMenuContext } from '@/context/SettingsMenu/SettingsMenu';
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage';
import { ErrorMessageContext } from '@/context/ErrorMessage/ErrorMessage';

export default function Home() {
  const [droppedItemName, setDroppedItemName] = useState('');
  const { setIsSettingsActive } = useContext(SettingsMenuContext);
  const { setErrorMessage } = useContext(ErrorMessageContext);

  const handleDragOver = () => {
    setDroppedItemName('');
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (
      over?.data?.current &&
      active?.data?.current &&
      over.data.current.accepts.includes(active.data.current.type)
    ) {
      const droppedName = active.data.current?.name;
      setDroppedItemName(droppedName || '');
      setIsSettingsActive(false);
    } else {
      setErrorMessage(
        'This component type is not valid for this section on the phone!'
      );
    }
  };

  return (
    <DndContext onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
      <Header />
      <ErrorMessage />
      <Box sx={container}>
        <Sidebar />
        <Blueprint droppedItemName={droppedItemName} />
        <SettingsMenu />
      </Box>
    </DndContext>
  );
}
