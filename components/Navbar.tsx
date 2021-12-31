import { FC } from "react";
import userData from "@constants/userData";
import Link from "next/link";
import LinkNavbar from "./LinkNavbar";
import SocialNetworkLink from "./SocialNetworkLink";

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
        <div className="space-x-4 flex flex-row items-center">
          <SocialNetworkLink
            imageUrl="/linkedin.svg"
            link={userData.socialLinks.linkedin}
            name="linkedin"
          />
          <SocialNetworkLink
            imageUrl="/twitter.svg"
            link={userData.socialLinks.twitter}
            name="linkedin"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
