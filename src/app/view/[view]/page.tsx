'use client';
import { Blueprint } from '@/components/Blueprint/Blueprint';
import { Header } from '@/components/Header/Header';
import { SettingsMenu } from '@/components/SettingsMenu/SettingsMenu';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { DndContext, rectIntersection } from '@dnd-kit/core';
import { Box } from '@mui/material';
import { container } from '@/app/page.styles';
import { Message } from '@/components/Messages/Message';
import { TitleBox } from '@/components/TitleBox/TitleBox';
import { useDragAndDrop } from '@/hooks/useDragAndDrop';

interface ViewPageProps {
  params: {
    view: string;
  };
}
export default function ViewPage({ params: { view } }: ViewPageProps) {
  const {
    droppedItems,
    handleDragEnd,
    clearHeaderSection,
    clearContentSection,
    clearNavigationSection,
  } = useDragAndDrop();
  const decodedView = decodeURIComponent(view);

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={rectIntersection}>
      <Header />
      <TitleBox title={`Blueprint : ${decodedView}`} />
      <Message />
      <Box sx={container}>
        <Sidebar />
        <Blueprint
          droppedItems={droppedItems}
          clearHeaderSection={clearHeaderSection}
          clearContentSection={clearContentSection}
          clearNavigationSection={clearNavigationSection}
          isNavigationHidden={true}
        />
        <SettingsMenu />
      </Box>
    </DndContext>
  );
}
