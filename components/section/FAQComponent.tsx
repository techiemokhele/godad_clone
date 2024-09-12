"use client";

import { useState } from "react";
import { faqData } from "@/data/faqData";

const FAQComponent = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const handleShowAnswer = (id: number) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section id="faq" className="flex flex-col text-white gap-6">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-4xl px-10 md:px-24 lg:px-40 font-semibold text-center">
          To bring their ideas online, millions of consumers rely on our web
          hosting and domains.
        </h1>
        <p className="text-white text-2xl font-bold">
          Frequently Asked Questions
        </p>
      </div>

      <div className="flex flex-col gap-2 px-10 py-6">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start justify-center gap-2 border-y-2 border-gray-500 py-2"
          >
            <h3
              onClick={() => handleShowAnswer(item.id)}
              className="text-orange-2 text-md font-bold cursor-pointer px-2"
            >
              {item.question}
            </h3>
            {openItemId === item.id && (
              <p className="text-white text-xs italic px-2">
                &ldquo;{item.answer}&ldquo;
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQComponent;
