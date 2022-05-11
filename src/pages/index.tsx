import Head from "next/head";
import { ReactElement } from "react";
import { Show } from "../classes/show";
import HomeCard from "../components/homeCard";
import HomeCarousel from "../components/homeCarousel";
import Layout from "../components/layout";
import Logo from "../components/logo";
import createShowUri from "../utils/createShowUri";
import getShows from "../utils/getShows";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

export default function Home({ shows }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>undershows</title>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : ""}/favicon.ico`}
        />
      </Head>

      <div className="flex flex-col justify-center content-center items-center w-full h-full">
        <h1 className="mt-8">
          <Logo />
        </h1>

        <p className="mt-3 text-2xl">O underground respira.</p>

        <HomeCarousel
          slides={shows.map((show: Show) => (
            <HomeCard key={createShowUri(show)} show={show}></HomeCard>
          ))}
        />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      shows: getShows(),
    },
  };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout navbarProps={{ hiddenByDefault: true }}>{page}</Layout>;
};
