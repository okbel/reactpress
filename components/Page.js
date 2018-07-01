import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

/**
 * Common elements for all pages of your site.
 * - customize head, meta ...
 * - page loader with NProgress
 * - global css or js ...
 */
const Page = ({ children }) => (
  <div>
    <Head>
      <link rel="stylesheet" href="/static/styles.css" type="text/css" />
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
);

export default Page;
