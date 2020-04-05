import React from "react"
import { Field, FieldArray, Formik } from "formik"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import Form from "react-bootstrap/Form"
import Input from "../Input/input"
import { StyledButton } from "../Button/button"
import { schema } from "./schema"
import Partij from "./Partij"
import Dropdown from "../Dropdown/Dropdown"
import { isEmpty } from "../../utils/object"

const particulier = [
  {
    veld: "adres",
    label: "adres",
    placeholder: "Straat + Nummer, Postcode Gemeente",
  },
  { veld: "email", label: "e-mail", placeholder: "E-mail adres" },
  {
    veld: "telefoonnummer",
    label: "telefoonnummer",
    placeholder: "Tel. nummer",
  },
  {
    veld: "adreshuurpand",
    label: "adres huurpand",
    placeholder: "Straat + Nummer, Postcode Gemeente",
  },
  { veld: "huurprijs", label: "huurprijs", placeholder: "Huurprijs" },
  {
    veld: "huurachterstal",
    label: "totaal bedrag huurachterstal",
    placeholder: "Totaal huurachterstal",
  },
  {
    veld: "startdatum",
    label: "startdatum huurovereenkomst",
    placeholder: "DD/MM/JJJJ",
  },
  {
    veld: "einddatum",
    label: "einddatum huurovereenkomst",
    placeholder: "DD/MM/JJJJ",
  },
]
const StyledDropper = styled(Form.Control)`
  border-radius: 0;
`
function InputForm() {
  return (
    <div className="mt-24 text-center">
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          huurders: [{ voornaam: "", achternaam: "" }],
          verhuurders: [{ voornaam: "", achternaam: "" }],
          dropdown: "Particulier",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => {
          return (
            <Form
              className=""
              noValidate
              onSubmit={handleSubmit}
              style={{ marginLeft: "3rem", marginRight: "3rem" }}
            >
              <div className="flex flex-col mx-auto items-center form-group col-md-6">
                <Form.Control
                  className="rounded-none"
                  as="select"
                  name="dropdown"
                  onChange={handleChange}
                >
                  <option>Particulier</option>
                  <option>Vennootschap</option>
                </Form.Control>
              </div>

              <Partij values={values} partij="huurders" />
              <Partij values={values} partij="verhuurders" />
              <div className="flex flex-wrap flex-col">
                {values.dropdown === "Particulier" ? (
                  particulier.map(input => (
                    <Field
                      key={input.veld}
                      name={input.veld}
                      label={input.label}
                      placeholder={input.placeholder}
                      component={Input}
                    />
                  ))
                ) : (
                  <p>test</p>
                )}
                <StyledButton
                  type="submit"
                  className="w-1/2 mx-auto rounded-sm"
                  disabled={!isEmpty(touched) && !isValid}
                >
                  Verzend PDF
                </StyledButton>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default InputForm
