'use client';
import { ReactNode } from 'react';
import { AccordionContextProvider } from '@/context/AccordionMenu/AccordionMenu';
import { MessageContextProvider } from '@/context/Messages/Message';
import { SettingsMenuContextProvider } from '@/context/SettingsMenu/SettingsMenu';

interface AppProps {
  children: ReactNode;
}

export default function App({ children }: AppProps) {
  return (
    <MessageContextProvider>
      <AccordionContextProvider>
        <SettingsMenuContextProvider>{children}</SettingsMenuContextProvider>
      </AccordionContextProvider>
    </MessageContextProvider>
  );
}
