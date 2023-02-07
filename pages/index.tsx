import FavouriteProject from "components/FavouriteProjects";
import Hero from "components/Hero";
import type { NextPage } from "next";
import Container from "../components/Container";

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
