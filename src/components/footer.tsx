import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full h-24">
      <a
        className="flex gap-2 mx-4 text-center md:mx-0"
        href="https://github.com/undershows/gigs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          O <Logo textSize="text-l" /> é um projeto colaborativo.{" "}
          <span className="sm:hidden">
            <br></br>
          </span>
          Colabore você também.
        </p>
      </a>
    </footer>
  );
}
