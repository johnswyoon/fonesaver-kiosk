import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import manWithPhone from "../assets/img/manWithPhone.svg";
import bags from "../assets/img/bags.svg";

const Home = () => {
  return (
    <Container>
      <h1 className="text-center mt-4">Welcome to FoneSaver!</h1>
      <HeroImage>
        <img src={manWithPhone} alt="Man holding a phone" />
        <img id="bags" src={bags} alt="2 Shopping Bags" />
      </HeroImage>
    </Container>
  );
};

const HeroImage = styled.div`
  img {
    height: 50vh;
  }
  #bags {
    height: 20vh;
  }
`;

export default Home;
