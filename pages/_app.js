import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import "@/public/fonts/fonts.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
