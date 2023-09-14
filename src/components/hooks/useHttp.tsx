import { useCallback, useState } from "react";

import { HttpResponseData } from "../../../shared/types";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    }  catch (err) {
      
      if (err instanceof Error) {
        console.log(err);
        if (err.message === "Failed to fetch") {
          setError("Network error! Please check your internet connection.");
        } else {
          setError(err.message || "Something went wrong!");
        }
      } else {
        setError("Error occurred, try again.");
      }
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
