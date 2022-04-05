import axios from "axios";

export function restoretrashnoteService(token, note) {
  return axios.post(
    `/api/trash/restore/${note._id}`,
    {
      note: note,
    },
    { headers: { authorization: token } }
  );
}