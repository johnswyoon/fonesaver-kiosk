import React from "react";
import styled from "styled-components";
// import manWithPhone from "../assets/img/manWithPhone.svg";
// import bags from "../assets/img/bags.svg";
import phoneFlat from "../assets/img/phoneFlat.svg";

const Home = () => {
  return (
    <HeroContainer>
      <div className="mt-5 mr-5">
        <div className="mr-5">
          <h2>Build your audience</h2>
          <h2>and grow your</h2>
          <h2>brand on social</h2>
          <h2>media</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam
          nihil autem quidem unde quo perspiciatis illo rem, optio quia.
        </p>
      </div>
      <HeroImage>
        <div className="d-flex align-items-center">
          <img src={phoneFlat} alt="Man holding a phone" />
          {/* <img src={manWithPhone} alt="Man holding a phone" /> */}
          {/* <img id="bags" src={bags} alt="2 Shopping Bags" /> */}
        </div>
      </HeroImage>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 30rem;

  img {
    padding-left: 7rem;
  }
`;

const HeroImage = styled.div`
  img {
    height: 50vh;
  }
  #bags {
    height: 20vh;
  }
`;

export default Home;
