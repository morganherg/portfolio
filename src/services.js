import axios from "axios";

const baseUrl = "http://localhost:3001";

const getProjects = () => {
  const request = axios.get(`${baseUrl}/projects`);
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.log("fail", error);
    });
};

const getHtml = () => {
  const request = axios.get(`${baseUrl}/html`);
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.log("fail", error);
    });
};

const getReact = () => {
  const request = axios.get(`${baseUrl}/react`);
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.log("fail", error);
    });
};

const getDotNet = () => {
  const request = axios.get(`${baseUrl}/dotnet`);
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.log("fail", error);
    });
};

const api = {
  getProjects,
  getHtml,
  getReact,
  getDotNet,
};

export default api;
