import Head from "next/head";
// common elements for all pages.
const Page = ({ children }) => (
  <div>
    <Head>
      <link rel="stylesheet" href="/static/styles.css" type="text/css" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
);

export default Page;
