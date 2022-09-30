import { SessionProvider, useSession } from "next-auth/react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { StoreProvider } from "../utils/store";
import {useRouter} from "next/router"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {Component.auth? (
          <Auth>
            <Layout>
          <Component {...pageProps} />
        </Layout>
          </Auth>
          
        )
        :
        <Layout>
          <Component {...pageProps} />
        </Layout>}
      </StoreProvider>
    </SessionProvider>
  );
}

function Auth({ children }) {
  const router = useRouter ();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=login required');
    },
  });
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}

export default MyApp;
