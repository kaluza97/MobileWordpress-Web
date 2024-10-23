'use client';
import { ReactNode } from 'react';
import { AccordionContextProvider } from '@/context/AccordionMenu/AccordionMenu';
import { SettingsContextProvider } from '@/context/SettingsMenu/SettingsMenu';
import { ErrorMessageContextProvider } from '@/context/ErrorMessage/ErrorMessage';

interface AppProps {
  children: ReactNode;
}

export default function App({ children }: AppProps) {
  return (
    <ErrorMessageContextProvider>
      <AccordionContextProvider>
        <SettingsContextProvider>{children}</SettingsContextProvider>
      </AccordionContextProvider>
    </ErrorMessageContextProvider>
  );
}
