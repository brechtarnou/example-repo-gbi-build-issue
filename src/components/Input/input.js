import React from "react"
import styled from "styled-components"
import { getIn } from "formik"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import { camelizer } from "../forms/utils"

const Input = props => {
  const form = props.form
  const field = props.field
  let touched = getIn(form.touched, field.name)
  let errorMessage = getIn(form.errors, field.name)
  let naam = field.name.includes(".")
    ? field.name.split(".")[1] + " " + field.name.split(".")[0].slice(0, -3)
    : props.label
  return (
    <>
      <Form.Group
        as={Col}
        md="6"
        controlId="validationFormik01"
        className="flex flex-col mx-auto items-center"
      >
        <div className="text-left w-full">
          <Form.Label>{camelizer(naam)}</Form.Label>
          <StyledInput
            {...field}
            isValid={touched && !errorMessage}
            isInvalid={touched && !!errorMessage}
            placeholder={props.placeholder}
          />
        </div>
        <Form.Control.Feedback>Perfect!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">
          {camelizer(naam) + " " + errorMessage}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  )
}

const StyledInput = styled(Form.Control)`
  border-radius: 5px;
`
export default Input
