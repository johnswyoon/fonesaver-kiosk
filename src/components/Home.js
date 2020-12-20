import React from "react";
import BrandSlider from "./BrandSlider";
import styled from "styled-components";
import shopper from "../assets/img/shopper.svg";
import x100 from "../assets/img/compressed/new-x100-min.png";

const Home = () => {
  return (
    <MainContainer>
      <HeroContainer>
        <div id="main-text">
          <div>
            <h2>Introducing the </h2>
            <h2>
              <FoneSaverTitle>FoneSaver </FoneSaverTitle>
              charging
            </h2>
            <h2>on-the-go kiosk</h2>
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
        <img id="desktop-image" src={shopper} alt="Man holding a phone" />
        <InfoText>
          <p>
            It always seems to happen at the worst time, your battery dies and
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
        <MobileIllustration>
          <img id="mobile-image" src={shopper} alt="Man holding a phone" />
        </MobileIllustration>
      </InfoContainer>
      {/* <BrandSlider /> */}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  #background-image {
    width: 100%;
    z-index: -10;
    position: absolute;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 25rem;
  @media (max-width: 2000px) {
    padding: 2rem 20rem 0rem 20rem;
    align-items: flex-start;
    #main-text {
      padding-top: 5rem;
    }
  }
  @media (max-width: 1675px) {
    padding: 2rem 20rem 0rem 20rem;
    align-items: flex-start;
    #main-text {
      padding-top: 3.5rem;
    }
  }
  @media (max-width: 1500px) {
    padding: 0rem 15rem;
  }
  @media (max-width: 1290px) {
    padding: 0rem 10rem;
  }
  @media (max-width: 1100px) {
    padding: 0rem 5rem;
    align-items: flex-start;
  }
  //change
  @media (max-width: 878px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 8rem 1rem 8rem;
  }
  @media (max-width: 650px) {
    padding: 1rem 3rem 1rem 3rem;
  }
  @media (max-width: 500px) {
    padding: 1rem 2rem 1rem 2rem;
  }
  p {
    color: white;
  }
`;

const HeroImage = styled.div`
  img {
    width: 18vw;
    object-fit: cover;
    padding-left: 5rem;
    @media (max-width: 2000px) {
      width: 21vw;
      margin-left: 10rem;
    }
    @media (max-width: 1450px) {
      width: 25vw;
    }
    @media (max-width: 1200px) {
      width: 30vw;
    }
    @media (max-width: 950px) {
      width: 35vw;
    }
    @media (max-width: 878px) {
      display: block;
      margin: auto;
      width: 30vw;
      /* padding-top: 2.5rem; */
      padding-left: 0;
    }
    @media (max-width: 550px) {
      width: 30vw;
    }
    @media (max-width: 400px) {
      width: 45vw;
    }
  }
`;

const FoneSaverTitle = styled.span`
  /* color: #2b4cfc; */
  color: white;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 20rem 0rem 20rem;
  @media (max-width: 1675px) {
    padding: 3rem 15rem 0rem 15rem;
  }
  @media (max-width: 1500px) {
    padding: 3rem 10rem 0rem 10rem;
  }
  @media (max-width: 1350px) {
    padding: 3rem 8rem 0rem 8rem;
  }
  @media (max-width: 1200px) {
    padding: 3rem 8rem 0rem 8rem;
  }
  @media (max-width: 1100px) {
    padding: 2rem 7rem 0rem 7rem;
  }
  @media (max-width: 1000px) {
    display: block;
  }
  @media (max-width: 878px) {
    padding: 0rem 5rem 0rem 5rem;
  }
  @media (max-width: 550px) {
    padding: 0rem 3rem 0rem 3rem;
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
  #desktop-image {
    width: 50vw;
    padding-right: 10rem;
    object-fit: cover;
    @media (max-width: 1800px) {
      width: 60vw;
      padding-right: 5rem;
    }
    @media (max-width: 1675px) {
      width: 40vw;
      padding-right: 5rem;
    }
    @media (max-width: 1450px) {
      width: 50vw;
    }
    @media (max-width: 1250px) {
      width: 60vw;
      padding-right: 3rem;
    }
    @media (max-width: 1050px) {
      width: 75vw;
      padding-right: 2rem;
    }
    //change
    @media (max-width: 1000px) {
      display: none;
      padding: 0;
    }
  }
`;

const InfoText = styled.div`
  display: block;
  padding-top: 1rem;
`;

const MobileIllustration = styled.div`
  img {
    display: none;
    object-fit: cover;
    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      margin: auto;
      padding-top: 3rem;
      width: 30vw;
    }
    @media (max-width: 650px) {
      width: 40vw;
    }
    @media (max-width: 500px) {
      width: 45vw;
    }
  }
`;

export default Home;
