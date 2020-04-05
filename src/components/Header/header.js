import React from "react";
import styled from "styled-components";
import Logo from "../../images/logo.png";
import { navigate } from "gatsby";

const LogoDiv = styled.div`
  left: 0;
  top: 0;
  z-index: 12;
`;
const StyledH1 = styled.h1`
  font-family: Roboto, sans-serif;
  width: 60%;
  font-size: 2rem;
  padding: 0;
  color: #6e8a8a;

  text-transform: uppercase;
  @media screen and (max-width: 963px) {
    width: 75%;
    font-size: 1.5rem;
  }
`;

export default function Header() {
  return (
    <LogoDiv className="flex absolute inset-0 ml-4 mt-4 w-full mb-12">
      <img
        src={Logo}
        onClick={() => navigate("/")}
        className="w-12 mr-2 mb-4 lg: ml-4 cursor-pointer"
        alt="Logo Achterstallige huur"
      ></img>
      <StyledH1
        className="mt-2 lg:mt-1 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Example name
      </StyledH1>
    </LogoDiv>
  );
}
