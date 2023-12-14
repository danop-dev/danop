import NextDocument, {
  DocumentContext,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

const Document = (props: DocumentProps) => {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/white-logo.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

Document.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await NextDocument.getInitialProps(ctx);
  return {
    ...initialProps,
  };
};

export default Document;
