import React from "react"

export default function WhyUsCard({ image, title, description }) {
  return (
    <div className="w-3/4 md:w-1/2 text-center my-8 mx-auto">
      <img
        src={image}
        alt="Hart icoontje"
        className="w-1/2 md:w-1/6 mx-auto mt-4"
      ></img>
      <p className="px-6 inline text-brand-green font-semibold">{title}</p>
      <p className="px-8 lg:px-32 mt-4 text-brand-dark-gray text-sm">
        {description}
      </p>
    </div>
  )
}
