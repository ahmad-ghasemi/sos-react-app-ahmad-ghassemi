
import App from "next/app";
import { Provider } from "mobx-react";
import initializeStore from "../src/data/base/CoreStore";
import { DefaultSeo } from "next-seo";
import '/styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
const Noop = ({ children }) => <>{children}</>;
const clientSideEmotionCache = createEmotionCache();
class MyApp extends App {
  static async getInitialProps(appContext) {
    const { Component, ctx } = appContext;
    let pageProps = {};
    const query = ctx.query;
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const mobxStore = initializeStore(true, null, ctx?.req?.cookies);
    appContext.ctx.mobxStore = mobxStore;
    const appProps = await App.getInitialProps(appContext);

    return {
      ...appProps,
      pageProps,
      query,
      mobxStore: mobxStore,
      cookie: ctx?.req?.cookies,
    }; // mobxStore: mobxStore,
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === "undefined";

    this.mobxStore = isServer
        ? props.mobxStore
        : initializeStore(isServer, props.mobxStore, props.cookie);
  }



  render() {
    const { Component, emotionCache =
        clientSideEmotionCache, pageProps } = this.props;
    const Layout = Component.Layout || Noop;

    return (
        <Provider CoreStore={this.mobxStore} dir="rtl">
            <CacheProvider value={emotionCache}>
            <DefaultSeo
                title={"ُکمک رسان ایران"}
                openGraph={{
                  type: "website",
                  locale: "fa_IE",
                  url: "https://www.ıranassıstance.com/",
                  site_name: "iran sos",
                }}
                twitter={{
                  handle: "@handle",
                  site: "@site",
                  cardType: "summary_large_image",
                }}
            />
            <ThemeProvider theme={theme}>

                {/* CssBaseline kickstart an elegant,
                consistent, and simple baseline to
                build upon. */}

                <CssBaseline />
            <Layout {...pageProps} >
              <Component {...pageProps} />
            </Layout>
            </ThemeProvider>
            </CacheProvider>
        </Provider>
    );
  }
}

export default MyApp;
