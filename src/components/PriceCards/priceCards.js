import React from "react"
import styled from "styled-components"
import letter from "../../images/letter.svg"
import avatar from "../../images/avatar.svg"
import house from "../../images/litigation.svg"
import Card from "../Card/card"

const cards = [
  {
    id: 1,
    title: "Persoonlijke Ingebrekestelling",
    image: letter,
    description: `Uw opbrengsteigendom moet u opbrengen.
      In deze filosofie biedt Achterstallige huur
      een gratis gepersonaliseerde ingebrekestelling
      aan die u rechtstreeks naar uw huurder kan versturen.`,
    price: "Gratis",
  },
  {
    id: 2,
    title: "Ingebrekestelling door onze advocaten",
    image: avatar,
    description: `Mocht de gepersonaliseerde ingebrekestelling
      niet baten of u heeft uw huurder reeds veelvuldig
      aangeschreven laten wij onze advocaten binnen de
      48 uur na het indienen van uw dossier uw huurder
      aangetekend in gebreke stellen. Onze advocaten
      pogen met uw huurder proactief tot een oplossing
      te komen.`,
    price: "€40 exclusief BTW",
  },
  {
    id: 3,
    title: "Procedure voor de rechtbank",
    image: house,
    description: `Indien een minnelijke akkoord niet mogelijk blijkt,
      starten wij een procedure voor het Vredegerecht
      om de onbetaalde huur in te vorderen en
      het huurcontract te laten ontbinden.
      Onze advocaten verdedigen uw belangen ter zitting.
      Na de zitting handelen onze advocaten de uithuiszetting
      (vrijwillig of gedwongen) verder af.`,
    price: "€600 exclusief BTW",
  },
]
export default function PriceCards() {
  return (
    <div className="flex flex-column text-center">
      <h2 className="text-brand-black m-4 font-heading text-4xl">
        Onze werkwijze
      </h2>
      <div className="text-center lg:flex max-w-full">
        {cards.map(card => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            price={card.price}
          />
        ))}
      </div>
    </div>
  )
}
