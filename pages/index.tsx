import Hero from "components/Hero";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Container>
      <Hero />
    </Container>
  );
};

export default Home;
