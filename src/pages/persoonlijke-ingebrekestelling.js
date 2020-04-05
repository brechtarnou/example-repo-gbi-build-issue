import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/forms/Form"
import Header from "../components/Header/header"
import Nav from "../components/Nav/Nav"

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <Header />
    <Nav />
    <Form />
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
