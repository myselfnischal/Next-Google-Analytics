import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../pages/lib/gtag";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            data-partytown-config
            dangerouslySetInnerHTML={{
              __html: `
          partytown = {
            lib: "/_next/static/~partytown/",
            forward: ["gtag"]           
          };
        `,
            }}
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="worker"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
