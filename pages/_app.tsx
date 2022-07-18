
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState, useEffect} from "react"
import AOS from "aos";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
   const [showChild, setShowChild] = useState(false);
   useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
  return  (
    
    
      <Component {...pageProps} />

  )
  }
}

export default MyApp