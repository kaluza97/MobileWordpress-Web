import { ReactNode } from 'react';

export enum MessageType {
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Success = 'success',
}

export type Message = {
  content: string;
  type: MessageType;
} | null;

export interface MessageContextType {
  message: Message;
  setMessage: (content: string, type: MessageType) => void;
  clearMessage: () => void;
}

export interface MessageContextProviderProps {
  children: ReactNode;
}
