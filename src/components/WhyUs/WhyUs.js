import React from "react";
import WhyUsCard from "../WhyUsCard/WhyUsCard";
import heart from "../../images/house.svg";
import runMan from "../../images/running-man.svg";
import money from "../../images/money-bag.svg";
import custService from "../../images/customer-service.svg";

const redens = [
  {
    image: heart,
    title: "Een passie",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt totam nesciunt in enim quis, porro, nostrum fugit architecto ab, voluptate corporis. Asperiores tenetur cumque odio dicta, fugit velit eum molestias.",
  },
  {
    image: custService,
    title: "lorem",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt totam nesciunt in enim quis, porro, nostrum fugit architecto ab, voluptate corporis. Asperiores tenetur cumque odio dicta, fugit velit eum molestias.`,
  },
  {
    image: runMan,
    title: "lorem",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt totam nesciunt in enim quis, porro, nostrum fugit architecto ab, voluptate corporis. Asperiores tenetur cumque odio dicta, fugit velit eum molestias.`,
  },
  {
    image: money,
    title: "orem",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt totam nesciunt in enim quis, porro, nostrum fugit architecto ab, voluptate corporis. Asperiores tenetur cumque odio dicta, fugit velit eum molestias.`,
  },
];
export default function WhyUs() {
  return (
    <div className="flex flex-column text-center">
      <h2 className="text-brand-black m-4 font-heading text-4xl">
        Waarom Achterstallige Huur?
      </h2>
      <div className="flex flex-wrap flex-col md:flex-row">
        {redens.map((reden) => (
          <WhyUsCard
            image={reden.image}
            title={reden.title}
            description={reden.description}
          />
        ))}
      </div>
    </div>
  );
}
