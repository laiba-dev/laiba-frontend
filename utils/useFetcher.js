import { API_URL } from "./constants";
import { useCallback } from "react";

export const useFetcher = () => {
  const getFetch = useCallback(async (endpoint, params) => {
    return fetch(`${API_URL}${endpoint}/${params || ""} `).then((res) =>
      res.json()
    );
  }, []);

  const postFetch = useCallback(async (endpoint, values) => {
    return fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then((res) => res.json());
  }, []);

  const putFetch = useCallback(async (endpoint, values) => {
    return fetch(`${API_URL}${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then((res) => res.json());
  }, []);

  const deleteFetch = useCallback(async (endpoint, values) => {
    return fetch(`${API_URL}${endpoint}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then((res) => res.json());
  }, []);

  return { getFetch, postFetch, putFetch, deleteFetch };
};
