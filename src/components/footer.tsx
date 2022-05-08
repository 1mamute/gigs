import { NextPage } from "next";

export const Footer: NextPage = () => {
  return (
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
  );
};
