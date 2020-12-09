import React from "react";
import styled from "styled-components";
import facebook from "../assets/socials/facebook.png";
import twitter from "../assets/socials/twitter.png";
import instagram from "../assets/socials/instagram.png";
import linkedin from "../assets/socials/linkedin.png";

function Footer() {
  return (
    <StyledFooter className="">
      <div className="container d-flex justify-content-center align-items-center">
        <Socials>
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={instagram} alt="Instagram" />
          <img src={linkedin} alt="LinkedIn" />
        </Socials>
      </div>
      <div class="footer-copyright text-center py-3">
        Copyright © 2021 FoneSaver. All rights reserved.
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: sticky;
  margin-top: 2rem;
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  img {
    padding: 0.5rem;
    width: 20%;
  }
`;

export default Footer;
