import type { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            título: "Rodrigo",
        },
    };
};

const Index: NextPage = () => {
    return <div></div>;
};

export default Index;
