import axios from "axios";

const baseUrl = "http://localhost:3001";

const getProjects = () => {
  return axios
    .get(`${baseUrl}/projects`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching projects:", error);
      return [];
    });
};

const getCodingLanguage = () => {
  return axios
    .get(`${baseUrl}/codingLanguage`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching coding languages:", error);
      return [];
    });
};

const getCodeSamplesByLangId = (langId) => {
  return axios
    .get(`${baseUrl}/codeSamples?codeId=${langId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching code samples by langId:", error);
      return [];
    });
};

// const getHtml = () => {
//   return axios
//     .get(`${baseUrl}/html`)
//     .then((response) => response.data)
//     .catch((error) => {
//       console.error("Error fetching HTML data:", error);
//       return [];
//     });
// };

// const getReact = () => {
//   return axios
//     .get(`${baseUrl}/react`)
//     .then((response) => response.data)
//     .catch((error) => {
//       console.error("Error fetching React data:", error);
//       return [];
//     });
// };

// const getDotNet = () => {
//   return axios
//     .get(`${baseUrl}/dotnet`)
//     .then((response) => response.data)
//     .catch((error) => {
//       console.error("Error fetching .NET data:", error);
//       return [];
//     });
// };

// const getMongoDb = () => {
//   return axios
//     .get(`${baseUrl}/mongodb`)
//     .then((response) => response.data)
//     .catch((error) => {
//       console.error("Error fetching MongoDB data:", error);
//       return [];
//     });
// };

// const getSql = () => {
//   return axios
//     .get(`${baseUrl}/sql`)
//     .then((response) => response.data)
//     .catch((error) => {
//       console.error("Error fetching Sql/PostgreSQL data:", error);
//       return [];
//     });
// };

const api = {
  getProjects,
  getCodingLanguage,
  getCodeSamplesByLangId,
  // getHtml,
  // getReact,
  // getDotNet,
  // getMongoDb,
  // getSql,
};

export default api;
