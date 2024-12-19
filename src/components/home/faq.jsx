import React, { useState } from "react";

export default function FAQ() {
  // State to track the open FAQ item
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the FAQ item based on index
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h6>FAQ</h6>
            <h2>
              Frequently Asked
              <br /> Questions
            </h2>
          </div>
          <div className="faq-list">
            {faqData.map((item, index) => (
              <div
                className={`faq-item ${openIndex === index ? "active" : ""}`}
                key={index}
              >
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{item.question}</h3>
                  <span className="faq-toggle">
                    {openIndex === index ? "+" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <a href="#" className="get-template-btn">
            Have more questions?
          </a>
        </div>
      </section>
    </div>
  );
}

// Sample FAQ data
const faqData = [
  {
    question: "What industries we are serving?",
    answer:
    "We cater to a wide range of industries including healthcare, finance, retail, manufacturing, education, and more. Our AI-driven insights, custom software, and integrated technology solutions are designed to address unique challenges and drive innovation in any sector."
  },
  {
    question: "What are the quality parameters?",
    answer:
      "Quality is at the core of everything we do. Our comprehensive QA and Testing services include automation, manual, performance, and security testing. We follow industry best practices and rigorous processes to deliver reliable, scalable, and user-friendly solutions.",
  },
  {
    question: "Can you integrate new technologies to our system?",
    answer:
      "Absolutely! Our Engineering and Technology Integration services specialize in seamlessly integrating new technologies like IoT, APIs, and cloud platforms with legacy systems. This ensures enhanced functionality and minimal disruption to your business operations.",
  },
];
