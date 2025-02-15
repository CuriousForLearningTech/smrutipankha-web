import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import meta from "../Data/meta";

const faqs = meta.FAQs || [];
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-11/12 md:w-9/12 mx-auto my-48 py-20 rounded-xl border-2 border-purple-400 bg-gray-100 text-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">FAQs</h2>
        <p className="text-gray-600 mt-3">
          Common questions and answers to help you out.
        </p>
      </div>
      <div className="max-w-sm md:max-w-3xl mx-1 md:mx-auto space-y-4">
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
