import React, { useState } from "react";
import { FiUser, FiMail, FiMessageCircle } from "react-icons/fi";

const ContactForm = () => {
  const [focus, setFocus] = useState({});
  const handleFocus = (field) => setFocus({ ...focus, [field]: true });
  const handleBlur = (field, value) => {
    if (!value) {
      setFocus({ ...focus, [field]: false });
    }
  };

  const fieldIcons = {
    Name: <FiUser className="absolute left-3 top-4 text-gray-400" />,
    Email: <FiMail className="absolute left-3 top-4 text-gray-400" />,
    Message: (
      <FiMessageCircle className="absolute left-3 top-4 text-gray-400" />
    ),
  };

  return (
    <section
      id="contact-us"
      className="md:w-1/2 md:mx-auto my-48 py-20 md:rounded-xl bg-gray-900 text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-gray-300 mt-3">We'd love to hear from you!</p>
      </div>
      <form className="max-w-lg mx-8 md:mx-auto space-y-6">
        {["Name", "Email", "Message"].map((field) => (
          <div key={field} className="relative">
            {fieldIcons[field]}
            <input
              type={field === "Email" ? "email" : "text"}
              id={field}
              className={`peer w-full pl-10 pr-4 py-3 border-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                focus[field] ? "pt-6" : ""
              }`}
              onFocus={() => handleFocus(field)}
              onBlur={(e) => handleBlur(field, e.target.value)}
            />
            <label
              htmlFor={field}
              className={`absolute left-10 text-gray-400 transition-all ${
                focus[field] ? "-top-2 text-sm bg-gray-900 px-1" : "top-3"
              }`}
            >
              {field}
            </label>
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-md transition-all"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
