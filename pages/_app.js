
import App from "next/app";
import { Provider } from "mobx-react";
import initializeStore from "../src/data/base/CoreStore";
import { DefaultSeo } from "next-seo";

const Noop = ({ children }) => <>{children}</>;

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
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || Noop;

    return (
        <Provider CoreStore={this.mobxStore}>
            <DefaultSeo
                title={"moverii"}
                openGraph={{
                  type: "website",
                  locale: "en_IE",
                  url: "https://www.moverii.de/",
                  site_name: "mvoerii",
                }}
                twitter={{
                  handle: "@handle",
                  site: "@site",
                  cardType: "summary_large_image",
                }}
            />
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
        </Provider>
    );
  }
}

export default MyApp;
