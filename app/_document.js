import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet }     from "styled-components";


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const original = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        original({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initial = await Document.getInitialProps(ctx);
      return {
        ...initial,
        styles: (
          <>
            {initial.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
