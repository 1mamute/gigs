import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || (page => page);

  return getLayout(<Component {...pageProps} />);
}
