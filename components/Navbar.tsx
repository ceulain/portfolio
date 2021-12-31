import { FC } from "react";
import userData from "@constants/userData";
import Link from "next/link";
import LinkNavbar from "./LinkNavbar";
import SocialNetworkLink from "./SocialNetworkLink";
import SocialNetwork from "./SocialNetwork";

const Navbar: FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
      <nav className="flex md:flex-row justify-between items-center">
        {/* Home */}
        <div className="flex flex-col">
          <Link href="/">
            <a className="font-semibold text-xl">
              {userData.name}
              <p className="text-base font-light text-gray-500">
                {userData.designation}
              </p>
            </a>
          </Link>
        </div>
        {/* About */}
        <LinkNavbar name="About" path="/about" />
        <LinkNavbar name="Projects" path="/projects" />
        <LinkNavbar name="Experience" path="/experience" />
        <LinkNavbar name="Contact" path="/contact" />

        {/* Social Network */}
        <SocialNetwork />
      </nav>
    </div>
  );
};

export default Navbar;
