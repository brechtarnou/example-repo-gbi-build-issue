import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 0;
  right: 0.75rem;

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);

    text-decoration: none;
    color: #fff;
    background-color: #c1d6d6;
  }
`

export default function Card({ image, title, price, description }) {
  return (
    <div className="flex w-10/12 mt-4 text-left transition-all duration-500 ease-in transform hover:scale-105 mx-auto lg:w-2/7">
      <div className="mx-auto rounded overflow-hidden shadow-lg lg:max-w-sm relative">
        <img
          className="w-1/2 mx-auto mt-4"
          src={image}
          alt="Sunset in the mountains"
        />
        <div className="px-6 pt-4 pb-8 text-left">
          <div className="font-bold text-brand-black font-heading text-xl mb-2">
            {title}
          </div>
          <span className="inline-flex text-sm text-color-gray-700 font-medium bg-gray-200 rounded-full px-3 py-1 mr-2">
            {price}
          </span>
          <p className="flex-initial px-6 py-4 text-brand-dark-gray font-body text-base">
            {description}
          </p>
        </div>
        <StyledLink className="border rounded p-2 text-sm mb-4 border-brand-green bg-brand-green text-white">
          Ga van start
        </StyledLink>
      </div>
    </div>
  )
}
