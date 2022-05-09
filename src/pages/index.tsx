import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { Card } from "../components/card";
import { Show } from "../classes/show";
import getShows from "../utils/getShows";
import Layout from "../components/layout";
import { ReactElement } from "react";
import Logo from "../components/logo";

export default function Home({ shows }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>undershows</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col flex-1 justify-center items-center px-20 w-full text-center">
        <h1>
          <Logo />
        </h1>

        <p className="mt-3 text-2xl">O underground respira.</p>

        <div className="flex flex-wrap justify-around items-center mt-6 max-w-4xl sm:w-full">
          {shows.map((show: Show) => (
            <Card
              key={show.name}
              name={show.name}
              date={show.date}
              bands={show.bands}
              schedule={show.schedule}
              img={show.img}
            ></Card>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      shows: await getShows(),
    },
  };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout navbarProps={{ hiddenByDefault: true }}>{page}</Layout>;
};
