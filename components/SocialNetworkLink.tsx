import Image from "next/image";
import { FC } from "react";

interface ISocialNetworkLinkProps {
  imageUrl: string;
  link: string;
  name: string;
}

const SocialNetworkLink: FC<ISocialNetworkLinkProps> = ({
  imageUrl,
  link,
  name,
}) => {
  return (
    <a href={link} className="text-base font-normal text-gray-600">
      <Image
        src={imageUrl}
        width={16}
        height={16}
        alt={name}
        layout="fixed"
      ></Image>
    </a>
  );
};

export default SocialNetworkLink;
