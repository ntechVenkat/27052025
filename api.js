import axios from "axios";

const url = "http://localhost:3200/Users";
export const getData = () => {
  return axios.get(url);
};

export const postData = (data) => {
  return axios.post(url, data, {
    headers: {
      "content-type": "application/json",
    },
  });
};

export const putData = (id, data) => {
  return axios.put(url + "/" + id, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteData = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
