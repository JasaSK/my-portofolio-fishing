import axios from "../lib/axios";

export const getProfil = async (data) => {
  const res = await axios.get("/user/profile");
  return res.data;
};
export const updateProfil = async (data) => {
  const res = await axios.put("/user/profile");
  return res.data;
};
