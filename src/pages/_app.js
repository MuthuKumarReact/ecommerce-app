import { SnipCartProvider } from "@hooks/use_sinpcart";
import "@styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <SnipCartProvider>
      <Component {...pageProps} />
    </SnipCartProvider>
  );
}

export default MyApp;
