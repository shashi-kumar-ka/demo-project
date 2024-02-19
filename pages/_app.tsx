// import type { AppProps } from 'next/app'
// import { createSlice, configureStore} from '@reduxjs/toolkit';

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../src/components/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
