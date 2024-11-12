import { HeaderObjectType } from '@/services/Settings/fetchSettings.types';

const endpoint = process.env.NEXT_PUBLIC_API_HEADER_ENDPOINT;

if (!endpoint) {
  throw new Error(
    'API_HEADER_ENDPOINT is not defined in the environment variables.'
  );
}

export const fetchHeader = async (): Promise<Array<HeaderObjectType>> => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.header;
  } catch (error) {
    console.error('Error fetching data api/header:', error);
    throw error;
  }
};

export const saveHeader = async (headerData: Array<HeaderObjectType>) => {
  const request = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ header: headerData }),
  });

  const result = await request.json();
  return result;
};
