import * as yup from "yup"
export const schema = yup.object({
  dropdown: yup.string().required(),
  huurders: yup.array().of(
    yup.object().shape({
      voornaam: yup.string().required("is een verplicht veld"),
      achternaam: yup.string().required("is een verplicht veld"),
    })
  ),
  verhuurders: yup.array().of(
    yup.object().shape({
      voornaam: yup.string().required("is een verplicht veld"),
      achternaam: yup.string().required("is een verplicht veld"),
    })
  ),
  adres: yup.string().required("is een verplicht veld"),
  telefoonnummer: yup
    .string()
    .matches(
      /^((\+32|0032)|0)\s?(4(7|8|9)\d{1}|\d{1,2})\/?(((\s?|\.?)\d{2}){3}|((\s?|\.)\d{3}){2})\b/,
      "is ongeldig"
    )
    .required("is een verplicht veld"),
  adreshuurpand: yup.string().required("is een verplicht veld"),
  email: yup
    .string()
    .email("is ongeldig")
    .required("is een verplicht veld"),
  huurprijs: yup
    .string()
    .matches(/^\d*(\.|\,){0,1}\d{1,2}$/, "moet een getal zijn")
    .required("is een verplicht veld"),
  huurachterstal: yup
    .string()
    .matches(/^\d*(\.|\,){0,1}\d{1,2}$/, "moet een getal zijn")
    .required("is een verplicht veld"),
  startdatum: yup
    .string()
    .matches(
      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
      "moet in het formaat: dd/mm/yyyy"
    )
    .required("is een verplicht veld"),
  einddatum: yup
    .string()
    .matches(
      /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
      "moet in het formaat: dd/mm/jjjj"
    )
    .required("is een verplicht veld"),
})
