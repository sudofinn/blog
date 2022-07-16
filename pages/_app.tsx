import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) { 
  return  (
      <Component {...pageProps} />

  )
}


export default MyApp

/*
-> use it if you get a hydration error

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useState, useEffect} from "react"

function MyApp({ Component, pageProps }: AppProps) {
   const [showChild, setShowChild] = useState(false);
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
*/