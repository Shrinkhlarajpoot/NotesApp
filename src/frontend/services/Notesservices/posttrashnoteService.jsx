import axios from "axios";

export function posttrashnoteService( token, note ) {
    console.log("trash se",note)
    return axios.post(
        `/api/notes/trash/${note._id}`,
        {
            note: note,
        },
        { headers: { authorization: token } }
    );
}