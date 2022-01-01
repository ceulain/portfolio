import userData from "@constants/userData";
import { FC } from "react";
import SocialNetwork from "./SocialNetwork";

const Footer: FC = () => {
  return (
    <footer className="bg-[#F1F1F1]">
      <div className="max-w-6xl  mx-auto px-4 py-10">
        <div className="h-0.5 w-full bg-white"></div>
        <div className="flex flex-row space-y-4 md:space-y-0 justify-between mt-8 flex-wrap">
          <p>&copy; {`${userData.name}. All Rights Reserved.`}</p>
          <div>
            <p>
              Developed by
              <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
                <a
                  className="hover:bg-red-500 rounded-md px-2 py-1  hover:text-gray-50"
                  href="https://manuarora.in"
                >
                  Manu Arora
                </a>
              </div>
            </p>
          </div>
          <SocialNetwork />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
