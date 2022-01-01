import userData from "@constants/userData";
import React, { FC } from "react";
import SocialNetworkLink from "./SocialNetworkLink";

const SocialNetwork: FC = () => (
  <React.Fragment>
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
  </React.Fragment>
);

export default SocialNetwork;
