import { useEffect, useState } from 'react';

const useFetchData = <T,>(url: string) => {
  const [reqUrl, setReqUrl] = useState(url);
  const [data, setData] = useState<T | null>(null);
  const [gettingDataError, setGettingDataError] = useState('');
  const [isDataLoading, setIsDataLoading] = useState(false);

  useEffect(() => {
    if (reqUrl) {
      setGettingDataError('');
      setIsDataLoading(true);
      fetch(reqUrl)
        .then((data) => {
          if (data.ok) {
            return data.json();
          }
          throw new Error('Something wrong');
        })
        .then((newData) => setData(newData))
        .catch((error) => {
          setGettingDataError(error.message);
        })
        .finally(() => {
          setIsDataLoading(false);
        });
    }
  }, [reqUrl]);
  return { data, isDataLoading, gettingDataError, setReqUrl };
};

export default useFetchData;
