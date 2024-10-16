"use client";

import { useState } from "react";
import WebinarButton from "./webinar-button";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "Our return policy is ...",
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order by ...",
    },
    {
      question: "Can I purchase items again?",
      answer: "Yes, you can purchase items again by ...",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-4xl font-semibold text-center md:text-5xl capitalize mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#cdff64] via-[#66d6ad] to-[#13b5e8]">
          FAQ
        </span>
      </h2>
      <p className="mb-4 text-center text-slate-400">
        Here are some frequently asked questions
      </p>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2 border shadow-2xl rounded-md">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left p-4 rounded-md focus:outline-none flex justify-between items-center"
          >
            <span>{faq.question}</span>
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </button>
          {openIndex === index && (
            <div className="p-4  ">  <span className="mr-3">{'→'}</span>{faq.answer}</div>
          )}
        </div>
      ))}

      <div className="mt-5">
        <WebinarButton />
      </div>
    </div>
  );
};

export default Faq;
