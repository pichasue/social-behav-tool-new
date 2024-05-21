(async () => {
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

  const API_ENDPOINT = 'http://localhost:3001/api/theories';

  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Response from /api/theories:', data);
  } catch (error) {
    console.error('Error fetching from /api/theories:', error);
  }
})();
