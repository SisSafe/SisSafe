import { useState, useEffect } from "react";
import Cookies from "js-cookie";

type UseCookieStateReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export const useCookieState = <T>(
  key: string,
  initialValue: T
): UseCookieStateReturnType<T> => {
  const [state, setState] = useState<T>(() => {
    const cookieValue = Cookies.get(key);
    if (cookieValue !== undefined) {
      return JSON.parse(cookieValue);
    }
    Cookies.set(key, JSON.stringify(initialValue));
    return initialValue;
  });

  useEffect(() => {
    Cookies.set(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};