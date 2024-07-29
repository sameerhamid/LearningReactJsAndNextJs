export const getAuthTokent = () => {
  const token = localStorage.getItem("token");
  return token;
};
