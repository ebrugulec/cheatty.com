import "../styles/globals.scss";

import type { AppProps } from "next/app";

import Header from "@components/Header";
import Footer from "@components/Footer";
import useDarkMode from "../hooks/UseDarkMode";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="app">
      <Header theme={colorTheme} setTheme={setTheme} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
