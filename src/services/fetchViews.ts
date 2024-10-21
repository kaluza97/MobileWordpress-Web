const endpoint = process.env.NEXT_PUBLIC_API_VIEWS_ENDPOINT;

if (!endpoint) {
    throw new Error("API_VIEWS_ENDPOINT is not defined in the environment variables.");
}

import { z } from 'zod';

const ViewSchema = z.array(z.object({
    _id: z.string(),
    name: z.string(),
}));

type ViewType = z.infer<typeof ViewSchema>;

export const fetchViews = async (): Promise<ViewType> => {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return ViewSchema.parse(data);

    } catch (error) {
        console.error('Error fetching data api/views:', error);
        return [];
    }
};

