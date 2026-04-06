import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // or any icon set

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border rounded-2xl p-2 border-gray-200 mb-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left font-medium text-white"
      >
        {question}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-400">
          {answer}
        </div>
      )}
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqData = [
    {
      question: "How long do your perfumes last?",
      answer: "Our perfumes typically last 6–8 hours depending on skin type and environment."
    },
    {
      question: "Are they original?",
      answer: "Yes, 100% authentic and sourced directly from manufacturers."
    },
    {
      question: "Do you offer payment on delivery?",
      answer: "Yes, we offer cash on delivery for select locations."
    },
    {
      question: "What if I don't like the scent?",
      answer: "We’ll work with you to find a better match. Your satisfaction matters to us."
    }
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-4 sm:px-12 md:px-24 pt-20 pb-20 bg-stone-900">
      <h1 className="text-3xl md:text-5xl text-center text-white mb-12 font-serif">Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => toggleItem(index)}
        />
      ))}
      {/* <div className="mt-8 text-sm text-gray-500 flex justify-between">
        <span>Terms & Support</span>
        <span>Privacy Policy</span>
        <span>Design with Care</span>
      </div> */}
    </section>
  );
}

export default FAQSection;