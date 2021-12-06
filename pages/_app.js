import LayoutWrapper from "../components/Wrapper/LayoutWrapper";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { wrapper } from "../utils/redux/store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);
