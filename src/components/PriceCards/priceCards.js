import React from "react";
import styled from "styled-components";
import letter from "../../images/letter.svg";
import avatar from "../../images/avatar.svg";
import house from "../../images/litigation.svg";
import Card from "../Card/card";

const cards = [
  {
    id: 1,
    title: "Persoonlijke test",
    image: letter,
    description: `lorem eehhehehe ipsum`,
    price: "test",
  },
  {
    id: 2,
    title: "Iexamnple",
    image: avatar,
    description: `lorem ipsum`,
    price: "test",
  },
  {
    id: 3,
    title: "example",
    image: house,
    description: `Ijsdjjd  lorem tekstje`,
    price: "test",
  },
];
export default function PriceCards() {
  return (
    <div className="flex flex-column text-center">
      <h2 className="text-brand-black m-4 font-heading text-4xl">
        Onze werkwijze
      </h2>
      <div className="text-center lg:flex max-w-full">
        {cards.map((card) => (
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
  );
}
