//= Types & Enums & Consts
// Others
import type { AppProps } from "next/app";

//= React components
// Others
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

//= Style & Assets
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=no" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#BA181B" />
                <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
                <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
            </Head>
            <NextNProgress color="#BA181B" />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
