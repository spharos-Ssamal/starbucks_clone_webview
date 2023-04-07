import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Header from "../components/layouts/Header";
import { RecoilRoot } from "recoil";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className="container">
      <RecoilRoot>
        <div className="header-container">
          {router.pathname === "/signup" ? null : <Header />}
        </div>
        <div className="main_container">
          <Component {...pageProps} />
        </div>
      </RecoilRoot>
    </div>
  );
}
