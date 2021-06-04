import { useState, useEffect } from "react";

function usePersistState(key: string, initialState: any) {
  const [state, setState] = useState(() => {
    const data = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistState;
