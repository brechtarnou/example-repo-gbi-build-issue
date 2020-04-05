import React from "react"
import { Field, FieldArray, Formik } from "formik"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import Form from "react-bootstrap/Form"
import Input from "../Input/input"
import Col from "react-bootstrap/Col"

const StyledButton = styled.button`
  color: ${props => (props.padding ? "#ca2a16" : "#6e8a8a")};
  background: transparent;
  display: inline;
  border: 0;
  font-size: 0.7rem;
  min-width: 130px;
  text-align: left;
  margin-left: ${props =>
    props.padding && props.partij === "verhuurders" ? "1.7rem" : "0"};
  padding-left: ${props => (props.padding ? "0.3rem" : 0)};
  cursor: pointer;
  /* position: relative;
  top: ${props => (props.padding ? "-0.5rem" : "-2rem")};
  left: ${props => (props.padding ? "-2rem" : "-33%")};
  @media screen and (min-width: 769px) {
    top: ${props => (props.padding ? "-0.53rem" : "-2rem")};
    left: ${props => (props.padding ? "-11.5rem" : "-20%")};
  } */
`
// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
const Partij = ({ partij, values }) => {
  return (
    <div className="">
      <FieldArray name={partij}>
        {({ push, remove }) => (
          <>
            {values[partij].map((p, index) => {
              return (
                <div key={index} style={{ maxHeight: "225px" }}>
                  <Field
                    name={`${partij}[${index}].voornaam`}
                    placeholder={`Voornaam ${partij.slice(0, -1)} ${index + 1}`}
                    component={Input}
                  />
                  <Field
                    name={`${partij}[${index}].achternaam`}
                    placeholder={`Achternaam ${partij.slice(0, -1)} ${index +
                      1}`}
                    component={Input}
                  />
                  <div className="inline-flex flex-row text-left mx-auto items-start">
                    <StyledButton
                      type="button"
                      onClick={() => push({ voornaam: "", achternaam: "" })}
                      partij={partij}
                    >
                      + Extra {partij.slice(0, -1)}
                    </StyledButton>
                    <StyledButton
                      type="button"
                      onClick={() => remove(index)}
                      padding={true}
                      partij={partij}
                    >
                      - Verwijder {partij.slice(0, -1)}
                    </StyledButton>
                  </div>
                </div>
              )
            })}
          </>
        )}
      </FieldArray>
    </div>
  )
}

export default Partij
