const fetch = require('node-fetch');

describe('/api/theories endpoint', () => {
  it('should return a successful response', async () => {
    const response = await fetch('http://localhost:3001/api/theories');
    expect(response.ok).toBeTruthy();
    const data = await response.json();
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBeTruthy();
  });
});
