"use client"
import { Blueprint } from "@/components/Blueprint/Blueprint";
import { Header } from "@/components/Header/Header";
import { SettingsMenu } from "@/components/SettingsMenu/SettingsMenu";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { DragEndEvent, DndContext } from "@dnd-kit/core";
import { Box } from "@mui/material";
import { useState } from "react";
import { container } from "@/app/page.styles";
import { AccordionContextProvider } from "@/context/AccordionMenu/AccordionMenu";
import { SettingsContextProvider } from "@/context/SettingsMenu/SettingsMenu";


export default function Home() {
  const [droppedItemName, setDroppedItemName] = useState('');

  const handleDragOver = () => {
    setDroppedItemName('');
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (over && over.id === 'HEADER') {
      const droppedName = active.data.current?.name;
      setDroppedItemName(droppedName || '');
    }
  }

  return (
    <AccordionContextProvider>
      <SettingsContextProvider>
        <DndContext onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
          <Header />
          <Box sx={container}>
            <Sidebar />
            <Blueprint droppedItemName={droppedItemName} />
            <SettingsMenu />
          </Box>
        </DndContext>
      </SettingsContextProvider>
    </AccordionContextProvider>
  );
}
