import { NavigationObjectType } from '@/services/Settings/fetchSettings.types';

const endpoint = process.env.NEXT_PUBLIC_API_NAVIGATION_ENDPOINT;

if (!endpoint) {
  throw new Error(
    'API_NAVIGATION_ENDPOINT is not defined in the environment variables.'
  );
}

export const fetchNavigation = async (): Promise<
  Array<NavigationObjectType>
> => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.navigation;
  } catch (error) {
    console.error('Error fetching data api/navigation:', error);
    throw error;
  }
};

export const saveNavigation = async (
  navigationData: Array<NavigationObjectType>
) => {
  try {
    const request = await fetch(endpoint, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ navigation: navigationData }),
    });

    const result = await request.json();
    return result;
  } catch (error) {
    console.error('Error updating navigation:', error);
    throw error;
  }
};

export const clearNavigation = async () => {
  try {
    const request = await fetch(endpoint, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ navigation: [] }),
    });

    const result = await request.json();
    return result;
  } catch (error) {
    console.error('Error clearing navigation:', error);
    throw error;
  }
};
