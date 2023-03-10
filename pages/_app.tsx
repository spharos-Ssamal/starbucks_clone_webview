import '../public/assets/css/style.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import Header from '../components/layouts/Header'

export default function App({ Component, pageProps }: AppProps) {

  const isLogin = true;
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div className='container'>
      {/* {
        router.pathname === '/signup || /sidebar ' ? null :  <Header />
      } */}
      <Component {...pageProps} />
    </div>
    ); 
  }
