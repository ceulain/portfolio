import userData from "@constants/userData";
import { FC } from "react";
import SocialNetwork from "./SocialNetwork";

const Footer: FC = () => {
  return (
    <footer className="bg-[#F1F1F1] dark:bg-gray-900 w-full bottom-0">
      <div className="max-w-6xl  mx-auto px-4 py-10">
        <div className="h-0.5 w-full bg-white"></div>
        <div className="flex flex-row space-y-4 md:space-y-0 justify-between mt-8 flex-wrap">
          <p>&copy; {`${userData.name}. All Rights Reserved.`}</p>
          <div className="space-x-4 flex flex-row items-center">
            <SocialNetwork />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
