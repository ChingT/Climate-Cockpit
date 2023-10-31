import axios from "axios";
import { useState } from "react";

const useApiRequest = (auth) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  axios.defaults.baseURL = "https://motion.propulsion-home.ch/backend/api/";

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
        if (response.status >= 200 && response.status < 300) {
          if (Object.keys(response.data).length === 0) {
            return setData("success");
          } else {
            return setData(response.data);
          }
        }
      })
      .catch((error) => {
        setError(error.response.data);
      })
      .finally(() => setLoading(false));
  };
  return { sendRequest, data, error, loading };
};

export default useApiRequest;
