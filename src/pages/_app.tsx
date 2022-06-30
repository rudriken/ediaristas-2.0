import { useEffect, useState } from "react";
import "@estilos/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import temaOficial, { temaVermelho } from "visual/temas/temas";

function MyApp({ Component, pageProps }: AppProps) {
    const [meuTema, alterarMeuTema] = useState(temaOficial);

    useEffect(() => {
        document.querySelector("#jss-server-side")?.remove();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            alterarMeuTema(temaVermelho);
        }, 3000);
    }, []);

    return (
        <>
            <Head>
                <title>e-diaristas</title>
            </Head>
            <ThemeProvider theme={meuTema}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
