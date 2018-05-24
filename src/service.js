import axios from "axios";

const ROOT_API = "https://forge-finder-server.herokuapp.com/api";

const responseData = rspns => rspns.data;

const requests = {
  get: url => axios.get(`${ROOT_API}${url}`).then(responseData),
  post: (url, payload) =>
    axios.post(`${ROOT_API}${url}`, payload).then(responseData),
  delete: url => axios.delete(`${ROOT_API}${url}`).then(responseData)
};

const dwarves = {
  all: page => requests.get(`/dwarves`),
  add: payload => requests.post(`/dwarves`, payload),
  delete: id => requests.delete(`/dwarves/${id}`)
};

export default { dwarves };
