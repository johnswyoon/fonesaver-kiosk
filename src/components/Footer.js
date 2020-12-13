import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter className="">
      <div class="footer-copyright text-center py-3">
        Copyright © 2021 FoneSaver. All rights reserved.
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: sticky;
  margin-top: 2rem;
  @media (min-width: 576px) {
  }
`;

export default Footer;
