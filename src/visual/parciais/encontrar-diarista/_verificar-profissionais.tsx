import React from "react";
import { Container, Typography, Button } from "@mui/material";
import TituloPagina from "visual/componentes/exibe-dados/TituloPagina/TituloPagina";
import AmbienteSeguro from "visual/componentes/retorno/AmbienteSeguro/AmbienteSeguro";
import {
    FormularioContainer,
    PapelProfissionais,
    ContainerProfissionais,
} from "./_verificar-profissionais.styled";
import CampoDeTextoComMascara from "visual/componentes/entradas/CampoDeTextoComMascara/CampoDeTextoComMascara";
import InformacaoDoUsuario from "visual/componentes/exibe-dados/InformacaoDoUsuario/InformacaoDoUsuario";

const VerificarProfissionais: React.FC = () => {
    return (
        <>
            <AmbienteSeguro />
            <TituloPagina
                título={"Conheça os profissionais"}
                subtítulo={
                    "Preencha seu endereço e veja todos os profissionais da sua localidade"
                }
            />
            <Container sx={{ mb: 10 }}>
                <FormularioContainer>
                    <CampoDeTextoComMascara
                        máscara={"99.999-999"}
                        label={"Digite seu CEP"}
                        fullWidth
                    />
                    <Typography color={"error"}>CEP não encontrado</Typography>
                    <Button
                        variant={"contained"}
                        color={"secondary"}
                        sx={{ width: "220px" }}
                    >
                        Buscar
                    </Button>
                </FormularioContainer>
                <PapelProfissionais>
                    <ContainerProfissionais>
                        <InformacaoDoUsuario
                            nome={"Mariana Rocha de Queiroz"}
                            foto={"/imagens/fotos/Mariana Rocha de Queiroz.png"}
                            descrição={"Uberlândia"}
                            avaliação={5}
                        />
                        <InformacaoDoUsuario
                            nome={"Lídia Moraes Ribeiro Resende"}
                            foto={"/imagens/fotos/Lídia Moraes Ribeiro Resende.png"}
                            descrição={"Ituiutaba"}
                            avaliação={4}
                        />
                        <InformacaoDoUsuario
                            nome={"Rodrigo Gomes de Mendonça"}
                            foto={"/imagens/fotos/Rodrigo Gomes de Mendonça.png"}
                            descrição={"Uberlândia"}
                            avaliação={3}
                        />
                        <InformacaoDoUsuario
                            nome={"Carlos Alberto Momenté"}
                            foto={"/imagens/fotos/Carlos Alberto Momenté.png"}
                            descrição={"Catalão"}
                            avaliação={2}
                        />
                        <InformacaoDoUsuario
                            nome={"Ezequiel Ferreira da Silva"}
                            foto={"/imagens/fotos/Ezequiel Ferreira da Silva.png"}
                            descrição={"Goiatuba"}
                            avaliação={2}
                        />
                        <InformacaoDoUsuario
                            nome={"Maria Odenízia de Melo Silva"}
                            foto={"/imagens/fotos/Maria Odenízia de Melo Silva.png"}
                            descrição={"Gameleira"}
                            avaliação={2}
                        />
                    </ContainerProfissionais>
                    <Container sx={{ textAlign: "center" }}>
                        <Typography variant={"body2"} color={"textSecondary"} sx={{ mt: 5 }}>
                            ... e mais 50 profissionais atendem ao seu endereço
                        </Typography>
                        <Button variant={"contained"} color={"secondary"} sx={{ mt: 5 }}>
                            Contratar um(a) profissional
                        </Button>
                    </Container>
                </PapelProfissionais>
            </Container>
        </>
    );
};

export default VerificarProfissionais;
