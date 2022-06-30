import { createTheme } from "@mui/material";

const tema_vermelho = createTheme({
    palette: {
        primary: {
            main: "#FF0000",
        },
    },
    typography: {
        fontFamily: "Poppins, Roboto, sans-serif",
    },
    shape: {
        borderRadius: "3px",
    },
});

export default tema_vermelho;
