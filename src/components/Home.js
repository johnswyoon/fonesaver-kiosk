import React from "react";
import BrandSlider from "./BrandSlider";
import styled from "styled-components";
import shopper from "../assets/img/shopper.svg";
import x100 from "../assets/img/x100-warp.png";

const Home = () => {
  return (
    <MainContainer>
      <HeroContainer>
        <div>
          <div>
            <h2>Introducing the </h2>
            <h2>
              <FoneSaverTitle>FoneSaver </FoneSaverTitle>
              charging
            </h2>
            <h2>on the go kiosk</h2>
          </div>
          <p>
            In the next few months, you will see our convenient portable
            charging kiosks in your favorite malls.
          </p>
        </div>
        <HeroImage>
          <img id="x100" src={x100} alt="FoneSaver X100" />
        </HeroImage>
      </HeroContainer>
      <InfoContainer>
        <img src={shopper} alt="Man holding a phone" />
        <InfoText>
          <p>
            It always seems to happen at the worst time, you’re battery dies and
            you’re stuck. Not anymore. Look for one of the FoneSaver kiosks and
            rent a charger to take with you on-the-go.
          </p>
          <p>
            The best part is that it’s only $8 for the day and you can return it
            any other location! If you register for a membership, it’s only $4
            per day, forever! Our chargers have the cables built in so it
            doesn’t matter what type of phone, camera, earbuds or anything else
            you need to charge, our power banks will easily charge them up!
          </p>
          <p>
            Our chargers will charge most phones at least twice over and our
            charging technology means they charge twice as fast as most chargers
            on the market!
          </p>
          <p>
            To sign up, see and purchase our other exciting products, visit our
            store!
          </p>
          <button className="btn btn-primary">
            <a
              href="https://shop.fone-saver.com/"
              target="_notarget"
              className="text-white"
            >
              <p>Shop Now</p>
            </a>
          </button>
        </InfoText>
      </InfoContainer>
      {/* <BrandSlider /> */}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: block;
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 25rem;
  @media (max-width: 1675px) {
    padding: 5rem 20rem;
  }
  @media (max-width: 1500px) {
    padding: 5rem 15rem;
  }
  @media (max-width: 1290px) {
    padding: 5rem 10rem;
  }
  @media (max-width: 1100px) {
    padding: 5rem 5rem;
  }
  @media (max-width: 878px) {
    flex-direction: column;
    padding: 3rem 8rem 5rem 8rem;
  }
  @media (max-width: 650px) {
    padding: 3rem 3rem 5rem 3rem;
  }
  @media (max-width: 500px) {
    padding: 3rem 2rem 5rem 2rem;
  }
`;

const HeroImage = styled.div`
  img {
    width: 17vw;
    object-fit: cover;
    padding-left: 5rem;
    @media (max-width: 1450px) {
      width: 19vw;
    }
    @media (max-width: 1200px) {
      width: 21vw;
    }
    @media (max-width: 950px) {
      width: 25vw;
    }
    @media (max-width: 878px) {
      display: block;
      margin: auto;
      width: 25vw;
      padding-top: 2.5rem;
      padding-left: 0;
    }
    @media (max-width: 878px) {
      display: block;
      margin: auto;
      width: 25vw;
      padding-top: 2.5rem;
      padding-left: 0;
    }
    @media (max-width: 550px) {
      width: 30vw;
    }
    @media (max-width: 400px) {
      width: 40vw;
    }
  }
`;

const FoneSaverTitle = styled.span`
  color: #2b4cfc;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 20rem 0rem 20rem;
  @media (max-width: 1675px) {
    padding: 5rem 15rem 0rem 15rem;
  }
  @media (max-width: 1500px) {
    padding: 5rem 10rem 0rem 10rem;
  }
  @media (max-width: 1100px) {
    padding: 5rem 7rem 0rem 7rem;
  }
  @media (max-width: 878px) {
    display: block;
    padding: 5rem 7rem 0rem 7rem;
  }
  @media (max-width: 550px) {
    padding: 5rem 3rem 0rem 3rem;
  }
  p {
    padding: 0.5rem 0rem;
  }
  button {
    border-radius: 30px;
    margin-top: 1rem;
    a {
      text-decoration: none;
      p {
        color: white;
        padding: 0rem;
        margin: 0rem;
      }
    }
  }
  #x100 {
    padding-right: 5rem;
    max-height: 50rem;
    @media (max-width: 1675px) {
      max-height: 43rem;
    }
    @media (max-width: 1290px) {
      max-height: 40rem;
    }
    @media (max-width: 1100px) {
      padding-right: 2rem;
      max-height: 40rem;
    }
    @media (max-width: 878px) {
      display: block;
      margin: auto;
      max-height: 30rem;
      padding-right: 0rem;
    }
  }
`;

const InfoText = styled.div`
  display: block;
  padding-top: 1rem;
`;

export default Home;
