import axios from "axios";
import { useState, useEffect } from "react";

// Universal useFetch() Hook with Axios

/** 
 *  First run:
 *  const [{data, error, loading}, fetchData] = useFetch(url)
 * 
 *  How use it in function:
 *   const newJoke = () => {
 *    fetchData(url)
 *   } 
 * 
 * **/

export default function useFetch(apiUrl) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function fetchData(url) {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData(apiUrl);
  }, [apiUrl]);

  return [{ data, loading, error }, fetchData];
}
