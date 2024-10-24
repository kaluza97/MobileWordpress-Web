'use client';
import { ReactNode } from 'react';
import { AccordionContextProvider } from '@/context/AccordionMenu/AccordionMenu';
import { SettingsContextProvider } from '@/context/SettingsMenu/SettingsMenu';
import { ErrorMessageContextProvider } from '@/context/Messages/ErrorMessage/ErrorMessage';
import { SuccessMessageContextProvider } from '@/context/Messages/SuccessMessage/SuccessMessage';

interface AppProps {
  children: ReactNode;
}

export default function App({ children }: AppProps) {
  return (
    <SuccessMessageContextProvider>
      <ErrorMessageContextProvider>
        <AccordionContextProvider>
          <SettingsContextProvider>{children}</SettingsContextProvider>
        </AccordionContextProvider>
      </ErrorMessageContextProvider>
    </SuccessMessageContextProvider>
  );
}
