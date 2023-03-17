import type { AppProps } from "next/app";

import "@fontsource/poppins";
import "@/styles/globals.css.ts";
import "@/styles/normalize.css.ts";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
