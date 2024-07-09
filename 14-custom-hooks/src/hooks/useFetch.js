import React, { useEffect, useState } from "react";

function useFetch(fetchFn, initilaValue) {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initilaValue);
  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch data.",
        });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    error,
    fetchedData,
    setFetchedData,
  };
}

export default useFetch;
