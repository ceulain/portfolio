import { FC } from "react";
import userData from "@constants/userData";
import Link from "next/link";
import LinkNavbar from "./LinkNavbar";
import SocialNetwork from "./SocialNetwork";
import ThemeChanger from "./ThemeChanger";

const Navbar: FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
      <nav className="flex md:flex-row justify-between flex-wrap items-center">
        {/* Home */}
        <div className="flex flex-col">
          <Link href="/" className="font-semibold text-xl">
            {userData.name}
            <p className="text-base font-light text-gray-500">
              {userData.designation}
            </p>
          </Link>
        </div>
        <div className="flex flex-col xs:flex-row justify-between xs:space-x-6 sm:space-x-8 md:order-none marg">
          <LinkNavbar name="About" path="/about" />
          <LinkNavbar name="Projects" path="/projects" />
          <LinkNavbar name="Experience" path="/experience" />
          <LinkNavbar name="Contact" path="/contact" />
        </div>
        {/* Social Network */}
        <div className="space-x-4 flex flex-row items-center">
          <SocialNetwork />
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
