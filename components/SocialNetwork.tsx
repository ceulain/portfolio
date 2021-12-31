import userData from "@constants/userData";
import { FC } from "react";
import SocialNetworkLink from "./SocialNetworkLink";

const SocialNetwork: FC = () => (
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
);

export default SocialNetwork;
