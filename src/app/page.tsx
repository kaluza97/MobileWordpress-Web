'use client';
import { Blueprint } from '@/components/Blueprint/Blueprint';
import { Header } from '@/components/Header/Header';
import { SettingsMenu } from '@/components/SettingsMenu/SettingsMenu';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { DndContext, rectIntersection } from '@dnd-kit/core';
import { Box } from '@mui/material';
import { container } from '@/app/page.styles';
import { Message } from '@/components/Messages/Message';
import { useDragAndDrop } from '@/hooks/useDragAndDrop';

export default function Home() {
  const { droppedItems, handleDragEnd } = useDragAndDrop();

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={rectIntersection}>
      <Header />
      <Message />
      <Box sx={container}>
        <Sidebar />
        <Blueprint droppedItems={droppedItems} />
        <SettingsMenu />
      </Box>
    </DndContext>
  );
}
