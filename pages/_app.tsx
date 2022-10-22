import "../style/global.css";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/dist/shared/lib/router/router";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider>
      <Component {...pageProps} />;
    </SessionProvider>
  );
}

export default MyApp;
