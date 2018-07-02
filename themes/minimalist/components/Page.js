import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "./css/globals.css";
import "./css/nprogress.css";

Router.onRouteChangeStart = url => {
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
const Page = ({ children }) => <div>{children}</div>;

export default Page;
