import { useEffect, useState } from "react";

export function useFetch(url) {
  const [result, setResult] = useState({ url: null, data: null, error: null });

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          setResult({
            url,
            data: null,
            error: `Server error: ${res.status}`,
          });
          return;
        }

        return res.json();
      })
      .then((json) => {
        setResult({ url, data: json, error: null });
      })
      .catch((err) => {
        setResult({ url, data: null, error: err.message });
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  const isLoading = result.url !== url;

  return {
    data: isLoading ? null : result.data,
    error: isLoading ? null : result.error,
    isLoading,
  };
}
