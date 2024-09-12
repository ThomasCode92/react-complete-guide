import { useCallback, useEffect, useState } from 'react';

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || 'Something went wrong, failed to send request!',
    );
  }

  return resData;
}

export default function useHttp(url, config) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function clearData() {
    setData(null);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);

      try {
        const body = JSON.stringify(data);
        const resData = await sendHttpRequest(url, { ...config, body });
        setData(resData);
      } catch (error) {
        setError(error.message || 'Something went wrong!');
      }

      setIsLoading(false);
    },
    [config, url],
  );

  useEffect(() => {
    const isGetRequest = config && (config.method === 'GET' || !config.method);
    if (!config || isGetRequest) sendRequest();
  }, [config, sendRequest]);

  return { data, isLoading, error, sendRequest, clearData };
}
