import axios from "axios";
import { useState } from "react";

const useApiRequest = (auth) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  axios.defaults.baseURL = `${import.meta.env.VITE_API_BASEURL}`;

  console.log("sendRequest");
  const sendRequest = (method, url, requestData, isFormData) => {
    setLoading(true);
    setData(null);
    setError(null);
    axios.defaults.headers.common["Content-Type"] = isFormData
      ? "multipart/form-data"
      : "application/json";

    if (auth !== "noAuth") {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("auth-token");
    }

    axios({ method, url, data: requestData })
      .then((response) => {
        console.log("response.data", response.data);
        return setData(response.data);
      })
      .catch((error) => {
        console.log("error.response.data", error.response.data);
        setError(error.response.data);
      })
      .finally(() => setLoading(false));
  };
  return { sendRequest, data, error, loading };
};

export default useApiRequest;
