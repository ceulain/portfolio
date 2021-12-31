import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface ILinkNavbarProps {
  name: string;
  path: string;
}

const LinkNavbar: FC<ILinkNavbarProps> = ({ name, path }) => {
  const selectionnedItemStyle = "text-base text-gray-800 font-bold";
  const normalItemStyle = "text-base text-gray-600 font-normal";
  const router = useRouter();

  return (
    <div className="space-x-8 hidden md:block">
      <Link href={path}>
        <a
          className={
            router.asPath === path ? selectionnedItemStyle : normalItemStyle
          }
        >
          {name}
          {router.asPath === path && (
            <Image
              alt="arrow bottom"
              src="/arrow-bottom.svg"
              width={16}
              height={16}
            />
          )}
        </a>
      </Link>
    </div>
  );
};

export default LinkNavbar;
