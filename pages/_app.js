/**
 * Next.js uses the App component to initialize all the pages.
 * You can override it and control the page initialization.
 */
import App, { Container } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "../css/typography.css";
import "../css/globals.css";
import "../css/nprogress.css";
import React from "react";

// display a loader a the top of our page
Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class ReactpressApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>REACTPRESS DEMO</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
