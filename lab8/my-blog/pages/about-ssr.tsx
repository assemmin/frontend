import { GetServerSideProps } from "next";

export default function AboutSSR({ time }: any) {
  return <h1>SSR Time: {time}</h1>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
};