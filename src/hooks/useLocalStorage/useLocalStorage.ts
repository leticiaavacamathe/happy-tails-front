import { useCallback } from "react";

const useLocalStorage = () => {
  const setToken = (key: string, value: string) =>
    localStorage.setItem(key, value);

  const getToken = useCallback((key: string): string | null => {
    return localStorage.getItem(key);
  }, []);

  return { setToken, getToken };
};

export default useLocalStorage;
