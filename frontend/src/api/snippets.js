import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const createSnippet = (data) =>
  API.post("/api/snippets", data);

export const getSnippetById = (id) =>
  API.get(`/api/snippets/${id}`);
