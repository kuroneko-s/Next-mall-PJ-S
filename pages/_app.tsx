import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { createContext } from "react";
import useBaskets, { UseItems } from "@lib/useItems";
import Header from "@components/header";

export const GlobalContext = createContext<UseItems>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [baskets, appendItems, removeItem, removeAll] = useBaskets();

  return (
    <GlobalContext.Provider
      value={{
        baskets,
        appendItems,
        removeItem,
        removeAll,
      }}
    >
      <SWRConfig
        value={{
          refreshInterval: 5000,
          fetcher: (url: any) => fetch(url).then((response) => response.json()),
        }}
      >
        <section className="overflow-x-hidden box-border text-sm py-2">
          <Header />
          <Component {...pageProps} />
        </section>
      </SWRConfig>
    </GlobalContext.Provider>
  );
}

export default MyApp;
