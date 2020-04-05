import React from "react"
import { useTransition, animated } from "react-spring"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import "./overlay.css"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const StyledLink = styled(Link)`
  box-sizing: inherit;
  color: #eeedf2;
  text-decoration: none;
  background-color: transparent;
  display: block;
  padding: 0.5rem 1rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  outline-width: 0px;
  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
    text-decoration: none;
    color: #fff;
    background-color: #c1d6d6;
  }
`

const Overlay = ({ isActive = false, handleOverlay }) => {
  const expand = useTransition(isActive, null, {
    from: {
      opacity: 0,
      x: 100,
      y: 0,
      zIndex: 10,
    },
    enter: {
      opacity: 1,
      x: 100,
      y: 100,
      zIndex: 8,
    },
    leave: {
      opacity: 0,
      x: 100,
      y: 0,
    },
  })

  return expand.map(
    ({ item, props, key }) =>
      item && (
        <animated.div
          key={key}
          className="overlay-container flex flex-column"
          style={{
            ...props,
            height: props.y.interpolate(y => `${y}%`),
            width: props.x.interpolate(x => `${x}%`),
          }}
        >
          <div className="flex flex-column">
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/persoonlijke-ingebrekestelling">
              Persoonlijke Ingebrekestelling
            </StyledLink>

            <StyledLink style={{ float: "right" }} to="/pricing">
              Pricing
            </StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
          </div>
        </animated.div>
      )
  )
}

export default Overlay
