import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins&display=optional"
                        rel="stylesheet"
                    />
                    <title>LAIBA</title>
                </Head>
                <body style={{ fontFamily: 'Poppins' }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument