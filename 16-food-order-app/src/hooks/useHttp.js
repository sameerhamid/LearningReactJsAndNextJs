import React, { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(
      responseData.message || "Something went wrong, failed to send request."
    );
  }
  return responseData;
}

const baseUrl = "http://localhost:3000";
function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(
    async function () {
      console.log("calling send request");
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(`${baseUrl}/${url}`, config);
        setData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong");
      }

      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    console.log("useEffect");
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
}

export default useHttp;
