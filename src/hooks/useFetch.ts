import { useState } from 'react';

export const useFetch = (initialUrl?: string, options?: RequestInit) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [url, setUrl] = useState<string>(initialUrl || '');

  const fetchData = async (newUrl?: string) => {
    const fetchUrl = newUrl || url;
    if (!fetchUrl) return;

    setLoading(true);
    try {
      const response = await fetch(fetchUrl, options);
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData, setUrl };
};
