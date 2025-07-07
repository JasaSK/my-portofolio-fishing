import axios from "../lib/axios";

// REGISTER
export const register = async (data) => {
  const res = await axios.post("/auth/register", data);
  return res.data;
};
// LOGIN
export const login = async (data) => {
  const res = await axios.post("/auth/login", data);
  // Simpan token jika ada
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
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
