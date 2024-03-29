import type { AppProps } from "next/app";

import "@fontsource/poppins";
import "@/styles/globals.css";
import "@/styles/normalize.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
