import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#008489" />
          <meta name="description" content="TripFinder | Greatest Travel Booking Site" />
          <meta name="keywords" content="TripFinder, Travel, Tourism, Hotel, Cruise, Flight ticket, visa" />
          <link
            rel="icon"
            href="favicon.ico"
            type="image/png"
            sizes="16x16"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:400,400i,600,600i,700,700i&display=swap"
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
