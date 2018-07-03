// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* The stylesheet from @zeit/next-css is compiled to .next/static/style.css. 
          We have to include it into the page using a custom _document.js. 
          The file will be served from /_next/static/style.css --> */}
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
