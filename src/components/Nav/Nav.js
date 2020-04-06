import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Overlay from "../Overlay/overlay";

const FlexDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const StyledNav = styled(Navbar)`
  /* background: rgba(255, 255, 255, 0.9); */
  position: fixed;
  display: flex;
  justify-content: flex-end;
  .hamburger {
    width: 35px;
    height: 5px;
    background-color: #6e8a8a;
    margin: 3px 0;
  }
  z-index: 16;
  top: 0;
  right: 0;
  svg {
    color: #6e8a8a;
  }
`;
const BigBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 100%;
  align-items: flex-end;
  justify-content: space-around;
  &::first-letter {
    text-transform: capitalize;
  }
  @media screen and (max-width: 963px) {
    align-items: center;
  }
`;

export default function Nav() {
  const [isActive, setActive] = useState(false);
  const handleOverlay = (boolean) => setActive(boolean);
  return (
    <>
      <StyledNav>
        {isActive ? (
          <FontAwesomeIcon
            size="2x"
            style={{ color: "#eeedf2", cursor: "pointer" }}
            onClick={() => handleOverlay(false)}
            icon={faTimes}
          ></FontAwesomeIcon>
        ) : (
          <div
            className="flex flex-col pointer"
            onClick={() => handleOverlay(true)}
          >
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </div>
        )}
      </StyledNav>
      <Overlay isActive={isActive} handleOverlay={handleOverlay} />
    </>
  );
}
