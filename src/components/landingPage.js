import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Card from "react-bootstrap/Card"
import Navbar from "react-bootstrap/Navbar"
import Nav from "./Nav/Nav"
import Header from "./Header/header"
import { StyledButton } from "./Button/button"

const ImageBackground = styled(BackgroundImage)`
  background-position: 20% 80%;
  background-size: cover;
  min-width: 100%;
  height: 100vh;
  + * {
    margin-top: 0;
  }
`

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
`

const StyledH2 = styled.h2`
  font-family: Roboto, sans-serif;
  width: 40%;
  margin: 3em;
  font-size: 2rem;
  padding: 0;
  color: #141823;
  @media screen and (max-width: 963px) {
    width: 75%;
    margin: 1rem 1rem 11.5rem 1rem;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.5rem;
  }
`

const FlexDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: auto;
`
const LandingPage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "landing.png" }) {
        sharp: childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <Nav />
      <FlexDiv>
        <ImageBackground
          aria-label="Achtergrond foto"
          id="fcbg"
          Tag="section"
          fluid={image.sharp.fluid}
          fadeIn="soft"
        >
          <BigBox>
            <StyledH2>
              Achterstallige huur? Wij laten u niet vallen.
              <p className="pl-0 pr-16 pt-3 text-brand-dark-gray font-body md:pr-32 lg:pr-16">
                Als uw huurder niet betaalt, is het belangrijk snel in te
                grijpen. Achterstallige huur voorziet een gestroomlijnd
                stappenplan uw onbetaalde huur te recuperen. Laat uw gegevens
                online na en ontvang per e-mail uw gepersonaliseerde herinnering
                die u rechtstreeks naar uw huurder kan versturen. Mocht uw
                gepersonaliseerde herinnering niet baten laten wij onze ervaren
                advocaten uw huurder aanmanen binnen de 48 uur na het indienen
                van uw dossier voor een vaste prijs.
              </p>
              <StyledButton>Ga van start</StyledButton>
            </StyledH2>
          </BigBox>
        </ImageBackground>
      </FlexDiv>
    </>
  )
}

export default LandingPage
