import React, { useState } from "react";
import { ChevronUp } from "lucide-react";

const questions = [
  {
    question: "How does it works?",
    answer:
      "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla"
  },
  {
    question: "Can I rent a car without a credit card?",
    answer: ""
  },
  {
    question: "What are the requirements for renting a car?",
    answer: ""
  },
  {
    question: "Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?",
    answer: ""
  },
  {
    question: "Does Car Rental offer coverage products for purchase with my rental?",
    answer: ""
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="max-w-5xl mx-auto pt-10 pb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Top Car Rental Questions
      </h2>
      <div className="flex flex-col gap-6">
        {questions.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-xl bg-white border shadow transition ${
              openIdx === idx ? "border-gray-300" : "border-gray-200"
            }`}
          >
            <button
              className="w-full px-6 py-5 flex justify-between items-center focus:outline-none"
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}  //yha se openidx change hoga
            >
              <span className="font-bold text-black text-[18px] text-left">
                {item.question}
              </span>
              <ChevronUp
                className={`w-5 h-5 text-gray-600 transition-transform ${
                  openIdx === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIdx === idx && item.answer && (
              <div className="px-6 pb-5 text-left text-sm text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
