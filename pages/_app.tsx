import GlobalStyle from "@/styles/GlobalStyles";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </RecoilRoot>
    </>
  );
}
