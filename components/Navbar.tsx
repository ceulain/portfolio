import { FC } from "react";
import userData from "@constants/userData";
import Link from "next/link";
import LinkNavbar from "./LinkNavbar";

const Navbar: FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
      <nav className="flex md:flex-row justify-between items-center">
        {/* Home */}
        <div className="flex flex-col">
          <Link href="/">
            <a className="font-semibold text-xl">{userData.name}</a>
          </Link>
        </div>
        {/* About */}
        <LinkNavbar name="About" path="/about" />
        <LinkNavbar name="Projects" path="/projects" />
        <LinkNavbar name="Experience" path="/experience" />
        <LinkNavbar name="Contact" path="/contact" />
      </nav>
    </div>
  );
};

export default Navbar;
