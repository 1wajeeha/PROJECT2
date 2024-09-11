import {View, Text} from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = ({url}) => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setData(response?.data);
      setIsLoading(false);
    } catch (error) {
      console.log('[error]', error);

      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {data, isloading, error, refetch};
};
export default useFetch;
