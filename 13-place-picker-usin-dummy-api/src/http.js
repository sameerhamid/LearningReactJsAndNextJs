const baseUrl = "http://localhost:3000";
export const fetchAvailablePlaces = async () => {
  const response = await fetch(`${baseUrl}/places`);
  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }
  const data = await response.json();
  return data.places;
};

export const updateUserPlaces = async (places) => {
  const response = await fetch(`${baseUrl}/user-places`, {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }
  const resData = await response.json();
  return resData.message;
};

export const fetchUserPlaces = async () => {
  const response = await fetch(`${baseUrl}/user-places`);
  if (!response.ok) {
    throw new Error("Failed to fetch user places");
  }
  const data = await response.json();
  return data.places;
};
