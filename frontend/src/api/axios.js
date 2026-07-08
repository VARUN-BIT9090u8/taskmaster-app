import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "https://personal-task-tracker-app-backend.onrender.com";

export const api = axios.create({
  baseURL: API_URL,
});

export default API_URL;