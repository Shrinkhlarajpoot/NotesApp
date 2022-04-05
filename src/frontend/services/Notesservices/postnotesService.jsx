import axios from "axios";

export function postnotesService(note, token) {
    
  return axios.post(
    "/api/notes",
    { note: note },
    { headers: { authorization: token } }
  );
}