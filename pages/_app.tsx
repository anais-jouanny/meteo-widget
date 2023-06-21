import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { Nunito } from "next/font/google";
import AppProvider from "../context/AppProvider";

const roboto = Nunito({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}
