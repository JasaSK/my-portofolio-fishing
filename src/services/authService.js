import axios from "../lib/axios";

// REGISTER
export const register = async (data) => {
  const res = await axios.post("/register", data);
  return res.data;
};

// LOGIN
export const login = async (data) => {
  const res = await axios.post("/login", data);
  // Simpan token jika ada
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

// VERIFY CODE
export const verifyCode = async (data) => {
  const res = await axios.post("/verify-code", data);
  return res.data;
};
