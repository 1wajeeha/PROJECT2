import {View, Text} from 'react-native';
import {useEffect, useState} from 'react';

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/api/products/');
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
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
