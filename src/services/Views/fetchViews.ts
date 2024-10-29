import { ViewSchema, ViewType } from '@/services/Views/fetchViews.types';

const endpoint = process.env.NEXT_PUBLIC_API_VIEWS_ENDPOINT;

if (!endpoint) {
  throw new Error(
    'API_VIEWS_ENDPOINT is not defined in the environment variables.'
  );
}

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

export const fetchAddItem = async (name: string) => {
  const request = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name }),
  });
  const result = await request.json();
  return result;
};

export const fetchSaveEdit = (id: string, name: string) => {
  return fetch(`${endpoint}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name }),
  });
};

export const fetchRemoveItem = (id: string) => {
  return fetch(`${endpoint}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
};
