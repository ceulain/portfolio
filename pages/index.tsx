import FavouriteProject from "@components/FavouriteProjects";
import Hero from "@components/Hero";
import Container from "@components/Container";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container>
      <>
        <Hero />
        <FavouriteProject />
      </>
    </Container>
  );
};

export default Home;
