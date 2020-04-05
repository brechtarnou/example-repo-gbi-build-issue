import React from "react"
import WhyUsCard from "../WhyUsCard/WhyUsCard"
import heart from "../../images/house.svg"
import runMan from "../../images/running-man.svg"
import money from "../../images/money-bag.svg"
import custService from "../../images/customer-service.svg"

const redens = [
  {
    image: heart,
    title: "Een passie voor uw vastgoed!",
    description:
      "Onze advocaten zijn gepassioneerd door vastgoed en gespecialiseerd in vastgoedrecht.",
  },
  {
    image: custService,
    title: "Uw persoonlijke expert",
    description: `Eén ervaren advocaat wordt aan uw dossier toegewezen die uw dossier zal opvolgen van A tot Z. U
      kan deze steeds telefonisch en per e-mail bereiken.`,
  },
  {
    image: runMan,
    title: "Snel & eenvoudig",
    description: `Alle gegevens kan u online invullen en wij gaan onmiddellijk voor u aan het werk. Onze aangetekende
      zendingen vertrekken binnen de 48 uur na het indienen van uw dossier.`,
  },
  {
    image: money,
    title: "Kostenefficiënt",
    description: `Aangezien wij alles online afhandelen zijn we instaat om de kosten te drukken en te werken aan een
      vast en transparant tarief.`,
  },
]
export default function WhyUs() {
  return (
    <div className="flex flex-column text-center">
      <h2 className="text-brand-black m-4 font-heading text-4xl">
        Waarom Achterstallige Huur?
      </h2>
      <div className="flex flex-wrap flex-col md:flex-row">
        {redens.map(reden => (
          <WhyUsCard
            image={reden.image}
            title={reden.title}
            description={reden.description}
          />
        ))}
      </div>
    </div>
  )
}
