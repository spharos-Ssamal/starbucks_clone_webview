import '../public/assets/css/style.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import Header from '../components/layouts/Header'
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {

  const isLogin = true;
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div className='container'>
      <RecoilRoot >
      {
        router.pathname === '/signup' ? null :  <Header/>
      }
      <Component {...pageProps} />
      </RecoilRoot>
    </div>
    ); 
  }