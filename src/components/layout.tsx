import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="flex max-h-screen flex-col">
        <Navbar />
        <div className="flex h-screen flex-col items-center justify-center align-middle">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
