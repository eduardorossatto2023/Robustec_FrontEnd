import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // backend Go
  withCredentials: true,
});

export const AuthService = {
  async login(data) {
    const res = await api.post("/auth/login", data);
    return res.data;
  },
  async register(data) {
    const res = await api.post("/auth/register", data);
    return res.data;
  },
  async refresh(refreshToken) {
    const res = await api.post("/auth/refresh", { refresh_token: refreshToken });
    return res.data;
  },
  async me(token) {
    const res = await api.get("/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  },
  async logout(refreshToken) {
    await api.post("/auth/logout", { refresh_token: refreshToken });
    localStorage.clear();
  },
};
