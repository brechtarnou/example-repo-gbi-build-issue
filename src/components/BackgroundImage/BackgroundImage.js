import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const BackgroundImg = ({ children }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "landing.png" }) {
        sharp: childImageSharp {
          fluid(quality: 100, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      style={{ backgroundPosition: "20% 80%" }}
      aria-label="Achtergrond foto"
      id="fcbg"
      Tag="section"
      fluid={image.sharp.fluid}
      fadeIn="soft"
    >
      {children}
    </BackgroundImage>
  )
}

const ImageBackground = styled(BackgroundImg)`
  background-position: 20% 80%;
  background-size: cover;
  min-width: 100%;

  height: 100vh;
  + * {
    margin-top: 0;
  }
`
export default ImageBackground
