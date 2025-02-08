import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is Smruti-Pankha?",
    answer:
      "Smruti-Pankha is an AI-powered solution designed to assist users with intelligent features and automation.",
  },
  {
    question: "How does it work?",
    answer:
      "It utilizes advanced AI algorithms to analyze data and provide real-time insights and recommendations.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we prioritize security and employ encryption protocols to protect user data.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-10/12 mx-auto my-24 py-20 bg-gray-100 text-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">FAQs</h2>
        <p className="text-gray-600 mt-3">
          Common questions and answers to help you out.
        </p>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <FaChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
