import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/lib/apolloClient";
import Footer from "@/components/organisms/common/footer/Footer";
import Header from "@/components/organisms/common/header/Header";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
