import Apresentacao from "@parciais/index/_apresentacao";
import Vantagens from "@parciais/index/_vantagens";
import DuvidasFrequentes from "@parciais/index/_duvidas-frequentes";
import type { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            título: "Rodrigo",
        },
    };
};

const Index: NextPage = () => {
    return (
        <div>
            <Apresentacao />
			<Vantagens />
        </div>
    );
};

export default Index;
