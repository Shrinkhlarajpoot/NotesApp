import axios from "axios";

export function getnotesService(token) {
  return axios.get("/api/notes", { headers: { authorization: token } });
}