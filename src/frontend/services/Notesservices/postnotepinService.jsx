import axios from "axios";

export function postnotepinService(note, token ) {
    return axios.post(
        `/api/notes/pin/${note._id}`,
        { note: note },
        { headers: { authorization: token } }
    );
}