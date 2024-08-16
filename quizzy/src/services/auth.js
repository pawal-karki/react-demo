import { API_BASE_URL } from "./constant";

const AUTH_URL = `${API_BASE_URL}api/auth/`;

export const register = async (registerInfo) => {
  const response = await fetch(`${AUTH_URL}register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerInfo),
  });
  const json = await response.json();
  if (!response.ok) {
    return { error: true, message: json.message };
  }
  return { error: false, message: json.message };
};

export const login = async (loginInfo) => {
  const response = await fetch(`${AUTH_URL}login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginInfo),
  });
  const json = await response.json();
  if (!response.ok) {
    return { error: true, message: json.message };
  }
  return { error: false, message: json.message };
};

export const verifyEmail = async (token) => {
  const response = await fetch(`${AUTH_URL}verify-email/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key: token }),
  });
  const json = await response.json();
  if (!response.ok) {
    return { error: true, message: json.message };
  }
  return { error: false, message: json.message };
};
