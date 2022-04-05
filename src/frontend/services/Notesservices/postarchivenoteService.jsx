import axios from "axios";

export function postarchivenoteService(note, token) {
  console.log(note, "from service ");
  return axios.post(
    `/api/notes/archives/${note._id}`,
    {
      note: note,
    },
    { headers: { authorization: token } }
  );
}