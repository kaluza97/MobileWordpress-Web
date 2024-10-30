import { NavigationData } from '@/services/Settings/fetchSettings.types';

const endpoint = process.env.NEXT_PUBLIC_API_NAVIGATION_ENDPOINT;

if (!endpoint) {
  throw new Error(
    'API_NAVIGATION_ENDPOINT is not defined in the environment variables.'
  );
}

export const fetchGetNavigation = async () => {
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};

export const fetchSaveNavigation = async (navigationData: NavigationData): Promise<NavigationData> => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(navigationData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error saving navigation: ${response.status} ${errorText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Failed to save navigation:', error);
    throw new Error('Failed to save navigation. Please try again later.');
  }
};