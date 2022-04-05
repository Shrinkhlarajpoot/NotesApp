import axios from "axios";
export function editnoteService(token,note) {
  return axios.post(
    `/api/notes/${note._id}`,
    { note: note },
    { headers: { authorization: token } }
  );
}
