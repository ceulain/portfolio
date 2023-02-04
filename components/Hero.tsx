import userData from "@constants/userData";
import { FC } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Image from "next/image";

const Hero: FC = () => {
  const notations = [
    { color: "#F16", text: "Developer" },
    { color: "#F94", text: "Football Coach" },
  ];

  return (
    <div className="flex flex-row justify-center">
      <div className="w-full p-20 md:w-1/2">
        <RoughNotationGroup show={true}>
          {notations.map((notation) => (
            <RoughNotation
              type="highlight"
              color={notation.color}
              key={notation.text}
            >
              <p className="text-5xl lg:text-7xl font-bold text-gray-700 dark:text-gray-200">
                {notation.text}
              </p>
            </RoughNotation>
          ))}
        </RoughNotationGroup>
      </div>
      <div className="w-full hidden md:w-1/2 md:block mr-20">
        <Image
          src={userData.avatarUrl}
          alt="Avatar"
          layout="responsive"
          width={100}
          height={100}
        />
        <div className="flex flex-row space-x-4 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-90deg-up"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
            />
          </svg>
          <p className="font-mono">That's me</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
