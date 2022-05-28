import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetData = (url, initialData) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = setTimeout(() => {
      setIsLoading(false);
      axios.get(url).then((res) => setData(() => res.data));
    }, 1000);
    return () => {
      clearTimeout(getData);
    };
  }, [data]);

  return [data, isLoading];
};

export default useGetData;
