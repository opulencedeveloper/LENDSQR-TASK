import { useCallback, useState } from "react";

import { HttpResponseData } from "../../../shared/types";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(async (applyData: (data: HttpResponseData) => void) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://run.mocky.io/v3/b1e1f057-e2ed-4e10-ae60-cbc636bc4c1d");

      if (response.ok) {
        let responseData: HttpResponseData = await response.json();
        applyData(responseData);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while processing the response.");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
