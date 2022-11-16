import { useEffect, useState } from "react";

const isBrowser = () => typeof window !== 'undefined';

export function useWindowDimensions() {
    const [windowSize, setWindowSize] = useState(isBrowser() ? window?.innerWidth : 0);
    useEffect(() => {
        if(isBrowser()){
            window.addEventListener('resize', handleWindowResize);
        }
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }
    return {
      windowSize: windowSize,
    }
}
