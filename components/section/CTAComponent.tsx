"use client";

import { FormEvent, useState } from "react";
import ButtonComponent from "../common/ButtonComponent";
import TextInputComponent from "../common/TextInputComponent";

const CTAComponent = () => {
  const [search, setSearch] = useState<string>("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    console.log("Subscribing...");

    if (!search.trim()) {
      setSearch("");
      return;
    } else {
      setSearch(search);
      console.log("Registered domain name...");
    }
    setSearch("");
  };

  return (
    <section
      id="cta"
      className="relative h-[50vh] w-full flex justify-center items-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/cta2.jpg")`,
          filter: `blur(1px)`,
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold text-center">
          A domain is where it all begins.
        </h1>
        <p className="text-sm text-center">
          Bring your concept to life. Get a domain to mark your online
          territory.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-row gap-6 bg-white-1 rounded-lg px-2 py-1 w-[60vw] md:w-[40vw] lg:w-250vw]"
        >
          <TextInputComponent
            search
            type="text"
            rounded={false}
            value={search}
            onChange={(text) => setSearch(text)}
            placeholder="Search for your domain"
          />

          <ButtonComponent
            type="submit"
            text="Search"
            onClick={() => console.log("data captured")}
            decoration="primary"
            rounded={false}
            primaryDark={true}
            hoverShowIcon={false}
          />
        </form>
      </div>
    </section>
  );
};

export default CTAComponent;
