import React from "react";

const SectionOne = () => {
  return (
    <section className="flex h-screen w-full justify-center gap-10 px-5 pt-56">
      <article className="relative h-96 w-full">
        <img className="static w-[481px]" src="/images/s-2-1.png" alt="" />
        <p className="absolute bottom-20 left-20 -translate-x-1/2 transform text-black">
          Hot Product
        </p>
        <p className="absolute bottom-10 left-28 -translate-x-1/2 transform text-2xl text-black">
          Lounge Chair
        </p>
        <p className="absolute bottom-0 left-20 -translate-x-14 transform font-roboto text-black">
          Lounge Chair
        </p>
      </article>

      <article className="h-96 w-full">
        <img className="w-[420px]" src="/images/s-2-2.png" alt="" />
      </article>

      <article className="relative h-96 w-full">
        <img className="w-[481px]" src="/images/s-2-3.png" alt="" />
        <p className="absolute bottom-20 left-20 -translate-x-1/2 transform text-black">
          Hot Product
        </p>
        <p className="absolute bottom-10 left-28 -translate-x-1/2 transform text-2xl text-black">
          Lounge Chair
        </p>
        <p className="absolute bottom-0 left-20 -translate-x-14 transform font-roboto text-black">
          Lounge Chair
        </p>
      </article>
    </section>
  );
};

export default SectionOne;
