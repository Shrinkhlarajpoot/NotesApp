import axios from "axios";

export function restorearchivenoteService(token, note) {
    return axios.post(`/api/archives/restore/${note._id}`, {}, { headers: { authorization: token } });
}