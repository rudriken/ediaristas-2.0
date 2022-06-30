import React from "react";
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from "next/document";
import { ServerStyleSheets } from "@mui/styles";

export default class QualquerNome extends Document {
    static async getInitialProps(contexto: DocumentContext): Promise<DocumentInitialProps> {
        const folhas = new ServerStyleSheets(),
            renderizaçãoPáginaOriginal = contexto.renderPage;
        contexto.renderPage = () =>
            renderizaçãoPáginaOriginal({
                enhanceApp: (Aplicação) => (propriedades) =>
                    folhas.collect(<Aplicação {...propriedades} />),
            });
        const propriedadesIniciais = await Document.getInitialProps(contexto);
        return {
            ...propriedadesIniciais,
            styles: [
                ...React.Children.toArray(propriedadesIniciais.styles),
                folhas.getStyleElement(),
            ],
        };
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link
                        rel="stylesheet"
                        href="
                        https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&
                        display=swap
                    "
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
