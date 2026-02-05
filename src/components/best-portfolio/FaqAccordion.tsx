"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="mt-6 space-y-3">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className={[
              "rounded-2xl border border-white/10 bg-[#020617]/40 transition-colors duration-300",
              isOpen ? "border-[#8ef3c1]/40 bg-[#0b1b2d]/60" : "",
            ].join(" ")}
          >
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              className={[
                "w-full text-left cursor-pointer text-white font-semibold flex items-center justify-between px-5 py-4 transition-colors duration-300",
                isOpen ? "text-[#8ef3c1]" : "",
              ].join(" ")}
            >
              <span className="pr-4">{faq.question}</span>
              <span
                className={[
                  "text-[#8ef3c1] transition-transform duration-300 w-4 h-4",
                  isOpen ? "rotate-45" : "",
                ].join(" ")}
              >
                +
              </span>
            </button>
            <div
              className={[
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              ].join(" ")}
            >
              <div className="overflow-hidden px-5 p-1">
                <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
