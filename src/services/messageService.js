export const fetchDailyMessage = async () => {
  try {
    const response = await fetch('/api/daily-message');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};