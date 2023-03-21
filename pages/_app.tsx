import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Header from '../components/layouts/Header'
import { RecoilRoot } from 'recoil';

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div className='container'>
      <RecoilRoot >
      {
        router.pathname === '/signup' || router.pathname === '/cart' ? null :  <Header/>
      }
      <Component {...pageProps} />
      </RecoilRoot>
    </div>
    ); 
  }
