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
      </div>
    </div>
  );
};

export default Hero;
