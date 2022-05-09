import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import { Show } from "../../classes/show";
import { DetailsCard } from "../../components/detailsCard";
import Layout from "../../components/layout";
import createShowUri from "../../utils/createShowUri";
import getShows from "../../utils/getShows";

export default function Details({ show }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>undershows - {show.name} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="antialiased tracking-wider leading-normal text-gray-900 bg-cover">
        <DetailsCard show={show} key={createShowUri(show)} />
      </div>
    </>
  );
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const shows = await getShows();

  // Get the paths we want to pre-render based on posts
  const paths = shows.map(show => {
    return {
      params: {
        name: [createShowUri(show)],
      },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      show: params,
    },
  };
};

Details.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
