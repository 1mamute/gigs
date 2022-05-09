import { NextComponentType } from "next";
import Logo from "./logo";

export const Footer: NextComponentType = () => {
  return (
    <footer className="flex justify-center items-center w-full h-24 border-t ">
      <a
        className="flex gap-2 justify-center items-center"
        href="https://github.com/undershows/gigs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          O <Logo textSize="text-l" /> é um projeto colaborativo. Colabore você também.
        </p>
      </a>
    </footer>
  );
};
