import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedExpirationData = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationData);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}
export const getAuthTokent = () => {
  const token = localStorage.getItem("token");
  const tokenDuration = getTokenDuration();
  if (!token) {
    return null;
  }
  if (tokenDuration < 0) {
    return "EXPIRED";
  }
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

export const checkAuthLoader = () => {
  const token = getAuthTokent();
  if (!token) {
    return redirect("/auth");
  }
};
