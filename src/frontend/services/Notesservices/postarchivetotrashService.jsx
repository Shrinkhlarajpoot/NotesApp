import axios from "axios";

export function postarchivestotrashService(token, note) {
  return axios.post(
    `/api/archives/trash/${note._id}`,
    {
      note: note,
    },
    { headers: { authorization: token } }
  );
}