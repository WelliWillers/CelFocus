import axios from 'axios';
import { AppProps } from 'next/app'
import {theme} from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { SearchContextProvider } from '../contexts/SearchContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {

  axios.defaults.baseURL = 'http://localhost:3000';

  return (
    <SearchContextProvider>
      <ChakraProvider theme={theme} >
          <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover 
          />
        <Component {...pageProps} />
      </ChakraProvider>
    </SearchContextProvider>
  )
}

export default MyApp