import React, { useCallback } from "react";

const useLocalStorage = () => {
  const get = useCallback((key: string) => {
    return localStorage.getItem(key);
  }, []);

  const set = useCallback((key: string, value: string) => {
    localStorage.setItem(key, value);
  }, []);

  return { get, set };
};

export default useLocalStorage;
