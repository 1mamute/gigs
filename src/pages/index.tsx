import type { GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Card } from "../components/card";
import yaml from "yaml";
import fs from "fs";
import path from "path";
import { Show } from "../classes/show";

export const Home: NextPage<GetStaticPropsResult> = ({ shows }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>undershows</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="font-newake text-6xl font-bold tracking-wider">
          <span className="underline underline-offset-2 ">UNDER</span>
          <span>SHOWS</span>
        </h1>

        <p className="mt-3 text-2xl">O underground respira.</p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {shows.map(show => (
            <Card key={show.name} name={show.name} date={show.date}></Card>
          ))}
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://github.com/undershows/gigs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Colabore você também.
        </a>
      </footer>
    </div>
  );
};

export function getStaticProps(): GetStaticPropsResult<any> {
  const result = yaml.parse(fs.readFileSync(path.join(process.cwd(), "src/gigs/shows.yaml"), "utf-8")) as any[];

  const showList: any[] = [];
  result.events.years.forEach(year => {
    return year.months.forEach(month => {
      return month.shows.forEach(show => {
        showList.push(show);
      });
    });
  });

  return {
    props: {
      shows: showList,
    },
  };
}
export default Home;
