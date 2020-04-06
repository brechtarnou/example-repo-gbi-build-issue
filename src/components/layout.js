/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";

import "./layout.css";
import { StaticQuery, graphql } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";

import Nav from "./Nav/Nav";
import Header from "./Header/header";

const GlobalStyle = createGlobalStyle`
  html {
    max-width: 100vw;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
  }
  body, input, select, textarea {
    font-size: 14pt;
    line-height: 1.5;
    font-family: 'Open Sans';
  }
  p {
    margin-bottom: 64px;
    color: #666;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway';
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: #292929;
  }
`;

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;
  overflow: hidden;
  img {
    margin-bottom: 0;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100vw;
  text-align: center;
  color: #fff;
  background-color: #000;
  img {
    margin-bottom: 0;
  }
`;

const FooterText = styled.div`
  font-size: 0.7em;
  padding: 3em;
`;

const Layout = ({ children, noMenu }) => (
  <StaticQuery
    query={graphql`
      query layoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Body>
          <GlobalStyle />
          <Helmet title={data.site.siteMetadata.title}>
            <html lang="nl" />
            <meta name="description" content="Achterstallige huur" />
          </Helmet>
          <Header />
          <Nav />
          {children}
          <Footer>
            <FooterText>Achterstalligehuur.be</FooterText>
          </Footer>
        </Body>
      </>
    )}
  />
);

export default Layout;
