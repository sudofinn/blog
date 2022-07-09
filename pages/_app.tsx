import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react"
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
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>

  )
  }
}

export default MyApp
