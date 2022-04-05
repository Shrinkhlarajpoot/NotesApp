import axios from "axios";
export function editarchivenoteService( note, token ) {
    return axios.post(`/api/archives/${note._id}`, { note: note }, { headers: { authorization: token } });
}