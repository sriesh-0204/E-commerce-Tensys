import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axiosClient.defaults.timeout = 20000;

export async function getRequest(URL='') {
    if(URL?.length===0){
        return;
    }
  const response = await axiosClient.get(`${URL}`);
    return response;
}

export async function postRequest(URL='', payload) {
    if (URL?.length === 0) {
      return;
    }
  const response = await axiosClient.post(`/${URL}`, payload);
    return response;
}

export async function patchRequest(URL='', payload) {
    if (URL?.length === 0) {
      return;
    }
  const response = await axiosClient.patch(`/${URL}`, payload);
    return response;
}

export async function deleteRequest(URL='') {
    if (URL?.length === 0) {
      return;
    }
  const response = await axiosClient.delete(`/${URL}`);
    return response;
}
