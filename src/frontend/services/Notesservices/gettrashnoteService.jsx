import axios from "axios";

export function gettrashnoteService(token) {
  return axios.get("/api/trash", { headers: { authorization: token } });
}
