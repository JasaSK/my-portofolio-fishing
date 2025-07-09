import axios from "../lib/axios";

// REGISTER
export const register = async (data) => {
  const res = await axios.post("/auth/register", data);
  return res.data;
};

// LOGIN
export const login = async (data) => {
  const res = await axios.post("/auth/login", data);
  const { token, message } = res.data;

  if (token) {
    localStorage.setItem("token", token);
  }

  return { token, message };
};

// VERIFY CODE
export const verifyCode = async (data) => {
  const res = await axios.post("/auth/verify-code", data);
  return res.data;
};

// RESEND CODE
export const resendCode = async (email) => {
  const res = await axios.post("/auth/resend-code", { email });
  return res.data;
};

// ✅ LUPA PASSWORD
export const forgotPassword = async (email) => {
  const res = await axios.post("/auth/forgot-password", { email });
  return res.data;
};

// ✅ RESET PASSWORD
export const resetPassword = async (data) => {
  const res = await axios.post("/auth/reset-password", data);
  return res.data;
};
