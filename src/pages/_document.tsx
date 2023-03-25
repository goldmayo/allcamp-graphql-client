import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ko">
        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
