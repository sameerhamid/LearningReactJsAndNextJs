export const getAuthTokent = () => {
  const token = localStorage.getItem("token");
  return token;
};

// loader function should return some value if no value return null
export function tokenLoader() {
  const token = getAuthTokent();
  if (token) {
    return getAuthTokent();
  }
  return null;
}