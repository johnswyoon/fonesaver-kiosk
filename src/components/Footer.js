import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <div class="footer-copyright text-center py-3">
        Copyright © 2021 FoneSaver. All rights reserved.
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: sticky;
  margin-top: 5rem;
  @media (max-width: 576px) {
    margin: 3rem 1rem 0.5rem 1rem;
    div {
      font-size: 0.7rem;
    }
  }
`;

export default Footer;
