'use client';
import { Blueprint } from '@/components/Blueprint/Blueprint';
import { Header } from '@/components/Header/Header';
import { SettingsMenu } from '@/components/SettingsMenu/SettingsMenu';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { DndContext } from '@dnd-kit/core';
import { Box } from '@mui/material';
import { container } from '@/app/page.styles';
import { Message } from '@/components/Messages/Message';
import { useDragAndDrop } from '@/hooks/useDragAndDrop';

export default function Home() {
  const { droppedItemName, handleDragEnd } = useDragAndDrop();

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Header />
      <Message />
      <Box sx={container}>
        <Sidebar />
        <Blueprint droppedItemName={droppedItemName} />
        <SettingsMenu />
      </Box>
    </DndContext>
  );
}
