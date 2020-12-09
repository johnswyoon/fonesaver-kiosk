import React from "react";
import BrandSlider from "./BrandSlider";
import styled from "styled-components";
import phoneFlat from "../assets/img/phoneFlat.svg";

const Home = () => {
  return (
    <div>
      <HeroContainer>
        <div className="mt-5 mr-5">
          <div className="mr-5">
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
          <div className="d-flex align-items-center">
            <img src={phoneFlat} alt="Man holding a phone" />
          </div>
        </HeroImage>
      </HeroContainer>
      <InfoContainer>
        <p>
          It always seems to happen at the worst time, you’re battery dies and
          you’re stuck. Not anymore. Look for one of the FoneSaver kiosks and
          rent a charger to take with you on-the-go.
        </p>

        <p>
          The best part is that it’s only $8 for the day and you can return it
          any other location! If you register for a membership, it’s only $4 per
          day, forever! Our chargers have the cables built in so it doesn’t
          matter what type of phone, camera, earbuds or anything else you need
          to charge, our power banks will easily charge them up!
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
        <button className="btn btn-primary btn-lg">
          <a href="https://shop.fone-saver.com/" className="text-white">
            Shop Now
          </a>
        </button>
      </InfoContainer>
      <BrandSlider />
    </div>
  );
};

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 25rem;

  img {
    padding-left: 5rem;
  }
`;

const HeroImage = styled.div`
  img {
    width: 25vw;
    object-fit: cover;
  }
`;

const FoneSaverTitle = styled.span`
  color: #2b4cfc;
`;

const InfoContainer = styled.div`
  padding: 1rem 30rem;
  p {
    padding: 0.5rem 0rem;
  }
  button {
    border-radius: 30px;
    margin-top: 1rem;
    a {
      font-size: 1.5rem;
      text-decoration: none;
    }
  }
`;

export default Home;
