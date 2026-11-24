import { useEffect, useState } from "react";

export function useFetch({ url }) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    console.log("Component mounted");
    const controller = new AbortController();

    fetch(url, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => {
        // 200 OK
        // data ready -> [{},{},{}]
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });

    return () => {
      console.log("Component unmounted");
      controller.abort();
    };
  }, []);

  return { data, error, isLoading };
}
