import { z } from 'zod';

export interface FormValues {
  name: string;
  icon: string;
  view: string;
}

export interface Settings {
  header: Array<unknown>;
  content: Array<unknown>;
  navigation: Array<FormValues>;
}

export const FormValuesSchema = z.object({
  name: z.string(),
  icon: z.string(),
  view: z.string(),
});


export const NavigationSchema = z.object({
  name: z.string(),
  icon: z.string(),
  view: z.string(),
});

export const SettingsSchema = z.object({
  header: z.array(z.unknown()),
  content: z.array(z.unknown()),
  navigation: z.array(NavigationSchema),
});

