import { z } from 'zod';

export const ViewSchema = z.array(
  z.object({
    _id: z.string(),
    name: z.string(),
  })
);

export type ViewType = z.infer<typeof ViewSchema>;
