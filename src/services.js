import axios from "axios";

const baseUrl = "http://localhost:3001";

const getProjects = () => {
  return axios.get(`${baseUrl}/projects`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching projects:", error);
      return [];  
    });
};

const getHtml = () => {
  return axios.get(`${baseUrl}/html`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching HTML data:", error);
      return [];  
    });
};

const getReact = () => {
  return axios.get(`${baseUrl}/react`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching React data:", error);
      return [];  
    });
};

const getDotNet = () => {
  return axios.get(`${baseUrl}/dotnet`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching .NET data:", error);
      return [];  
    });
};

const api = {
  getProjects,
  getHtml,
  getReact,
  getDotNet,
};

export default api;
