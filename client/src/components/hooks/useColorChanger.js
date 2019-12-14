import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useColorChanger = (key, initialValue) => {
  const [mode, setMode] = useLocalStorage("body", false);
  const card = document.getElementsByClassName("card-body");

  useEffect(() => {
    if (mode) {
      console.log(mode);
      setMode(mode);
      return card[0].classList.add("color-change");
    } else {
      return card[0].classList.remove("color-change");
    }
  }, [mode]);

  return [mode, setMode, useEffect];
};
