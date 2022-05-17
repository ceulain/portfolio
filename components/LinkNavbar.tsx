import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { Theme } from "types/theme";

interface ILinkNavbarProps {
  name: string;
  path: string;
}

const LinkNavbar: FC<ILinkNavbarProps> = ({ name, path }) => {
  const selectionnedItemStyle =
    "text-base text-gray-800 font-bold dark:text-gray-400";
  const normalItemStyle = "text-base text-gray-600 font-normal";
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <div className="">
      <Link href={path}>
        <a
          className={
            router.asPath === path ? selectionnedItemStyle : normalItemStyle
          }
        >
          {name}
          {router.asPath === path && (
            // workaround allows to add style to next image
            <div className="hidden md:inline">
              <Image
                alt="arrow bottom"
                src={
                  theme === Theme.Dark
                    ? "/dark-arrow-bottom.svg"
                    : "/arrow-bottom.svg"
                }
                width={16}
                height={16}
              />
            </div>
          )}
        </a>
      </Link>
    </div>
  );
};

export default LinkNavbar;
