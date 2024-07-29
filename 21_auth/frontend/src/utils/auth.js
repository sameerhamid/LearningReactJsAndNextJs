export const getAuthTokent = () => {
  const token = localStorage.getItem("token");
  return token;
};

export function tokenLoader() {
  return getAuthTokent();
}
