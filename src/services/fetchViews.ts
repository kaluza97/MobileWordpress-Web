const endpoint = 'http://localhost:9000/api/views';

export const fetchViews = async () => {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error fetching data api/views:', error);
        return null;
    }
};
