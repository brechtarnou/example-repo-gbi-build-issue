import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Landingpage from "../components/landingPage"
import PriceCards from "../components/PriceCards/priceCards"
import WhyUs from "../components/WhyUs/WhyUs"
import styled from "styled-components"
import svg from "../images/undraw_pull_request_gld8.svg"


const StyledSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

//form validation use Yup
//react bootstrap for styling or styled components
const IndexPage = () => (
  <div className="flex flex-column">
    <StyledSection>
      <Landingpage />
    </StyledSection>

    <StyledSection className="mt-12">
      <PriceCards />
    </StyledSection>

    <StyledSection className="mt-12">
      <WhyUs />
    </StyledSection>
  </div>
)

export default IndexPage
