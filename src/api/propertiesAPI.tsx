export const ApiService = {
  async getProperties() {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  },

  async getPropertyById(propertyId: number | string) {
    const response = await fetch(`/api/data/${propertyId}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  },

  async getFeaturedProperties() {
    const response = await fetch(`/api/data/featured`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  },
  async postFavorites(favorites: number[]) {
    const response = await fetch('/api/data/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ favorites }), // Send favorites as payload
    });

    if (!response.ok) {
      throw new Error(`Failed to post favorites: ${response.status}`);
    }

    return response.json(); // Return response if needed
  },
};
