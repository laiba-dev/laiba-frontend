import apiClient from "./apiClient";

const service = (apiToken) => {
  const getListSubmission = () =>
    apiClient.get("/api/submission", {
      headers: {
        Authorization: "Bearer " + apiToken,
      },
    });

  const getSubmission = (id) =>
    apiClient.get("/api/submission/" + id, {
      headers: {
        Authorization: "Bearer " + apiToken,
      },
    });
  return { getListSubmission, getSubmission };
};

export default service;
