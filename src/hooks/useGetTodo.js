import axios from "axios";
import { useQuery } from "react-query";

const useGetTodo = (url, key) => {
  const getTodo = async () => {
    try {
      const response = await axios.get(url);
      return response?.data;
    } catch (err) {
      return err;
    }
  };

  return useQuery([key], getTodo);
};

export { useGetTodo };
