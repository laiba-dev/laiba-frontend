import { API_URL } from "../constants";
import apiClient from "../services/apiClient";

const service = (apiToken) => {
  const getListMateri = (pembelajaranId) =>
    apiClient.get(`/api/framework/${pembelajaranId}/materi`, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + apiToken,
      },
    });

  const getMateri = (materiId) =>
    apiClient.get(`/api/materi/${materiId}/praktikum`, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + apiToken,
      },
    });

  const mulaiPraktikum = (praktikumId) =>
    apiClient.post(
      `/api/praktikum/${praktikumId}/mulai`,
      {},
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + apiToken,
        },
      }
    );

  return {
    getListMateri,
    getMateri,
    mulaiPraktikum,
  };
};

export default service;
