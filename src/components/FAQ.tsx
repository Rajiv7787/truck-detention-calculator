"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="mt-8 space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-sm"
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
            >
              <span className="text-sm font-semibold text-slate-900 sm:text-base">
                {item.question}
              </span>

              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-600 transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                <p className="text-sm leading-6 text-slate-600">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}