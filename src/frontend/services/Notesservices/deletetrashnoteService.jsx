import axios from "axios";

export const deletetrashnoteService = (token, note) => {
  return axios.delete(`/api/trash/delete/${note._id}`, {
    headers: { authorization: token },
  });
};