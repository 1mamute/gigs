import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { Card } from "../components/card";
import { Show } from "../classes/show";
import getShows from "../utils/getShows";
import Layout from "../components/layout";
import { ReactElement } from "react";

export default function Home({ shows }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>undershows</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="font-newake text-6xl font-bold tracking-wider ">
          <span className="underline underline-offset-4 ">UNDER</span>
          <span className="bg-black bg-clip-padding pl-1 pt-2 pr-1 text-white">SHOWS</span>
        </h1>

        <p className="mt-3 text-2xl">O underground respira.</p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
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
  return <Layout>{page}</Layout>;
};
