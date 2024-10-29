import { FormValues } from '@/services/Settings/fetchSettings.types';

const endpoint = process.env.NEXT_PUBLIC_API_SETTINGS_ENDPOINT;

if (!endpoint) {
  throw new Error(
    'API_SETTINGS_ENDPOINT is not defined in the environment variables.'
  );
}

export const fetchGetSettings = async () => {
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};

export const fetchSaveSettings = async (formData: FormValues) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Error saving settings: ${response.status} ${error}`);
  }

  return response.json();
};
