import "../styles/globals.scss";
import "../styles/nprogress.scss";

import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NProgress from "nprogress";

import Header from "@components/Header";
import Footer from "@components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());
  }, []);

  return (
    <div className="app">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
