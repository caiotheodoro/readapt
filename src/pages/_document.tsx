import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
export default class Document extends NextDocument {

    render() {
        return (
            <Html>
                <title>Readapt</title>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport"  content="width=device-width, initial-scale=1.0" />
                </Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Oooh+Baby&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}