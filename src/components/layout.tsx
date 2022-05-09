import Navbar, { NavbarProps } from "./navbar";
import { Footer } from "./footer";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  navbarProps?: NavbarProps;
};

export default function Layout({ children, navbarProps }: LayoutProps) {
  return (
    <>
      <div className="flex flex-col max-h-screen">
        <Navbar hiddenByDefault={navbarProps?.hiddenByDefault} />
        <div className="flex flex-col justify-center items-center h-screen align-middle">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
