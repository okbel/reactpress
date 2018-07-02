/**
 * Root.js is the root component, used to put stuff that must
 * be available across all pages : for example
 * - globals css,
 * - globals js,
 * - meta in head of the document
 * - etc
 */
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "../css/typography.css";
import "../css/globals.css";
import "../css/nprogress.css";

// display a loader a the top of our page
Router.onRouteChangeStart = url => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Theme = ({ children }) => (
  <div>
    <Head>
      <title>REACTPRESS DEMO</title>
    </Head>
    {children}
  </div>
);

export default Theme;
