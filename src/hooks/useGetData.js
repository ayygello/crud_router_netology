import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetData = (url, initialData) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    axios.get(url).then((res) => setData(res.data));
    return () => {
      setIsLoading(true);
    };
  }, [url]);

  return [data, isLoading];
};

export default useGetData;
