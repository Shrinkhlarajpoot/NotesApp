import axios from "axios";

export function getarchivenoteService(token) {
  return axios.get("/api/archives", { headers: { authorization: token } });
}
