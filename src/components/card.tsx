import { NextPage } from "next";
import { Show } from "../classes/show";

export const Card: NextPage<Show> = ({ name, date }) => {
  return (
    <a
      href="https://nextjs.org/docs"
      className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
    >
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="mt-4 text-xl">Data: {date}</p>
    </a>
  );
};
