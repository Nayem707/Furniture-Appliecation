import React from "react";

const SectionSeven = () => {
  return (
    <section className="mb-20">
      <div className="relative">
        <div className="h-screen">
          <img
            className="w-full object-contain"
            src="/images/img-3.png"
            alt=""
          />
        </div>
        <div className="absolute left-96 top-20 space-y-10 text-center">
          <div className="inline-flex h-24 w-96 items-center justify-center gap-2.5 rounded-lg bg-orange-500 p-2.5">
            <button className="font-poppins text-3xl font-bold capitalize text-white">
              Shop the look
            </button>
          </div>

          <div className="space-y-10">
            <h1 className="font-['Poppins'] text-9xl font-bold text-white">
              Kitchen
            </h1>
            <p className="font-['Poppins'] text-3xl font-bold text-white">
              Creating your beautiful home should not <br /> Cost the World!
            </p>
          </div>
          <div className="absolute left-96">
            <div className="relative h-20 w-20">
              <div className="absolute left-[16px] top-[16px] h-12 w-12 rounded-full bg-white" />
              <div className="absolute left-[34px] top-[34px] h-3 w-3 rounded-full bg-orange-500" />
              <div className="absolute left-0 top-0 h-20 w-20 rounded-full bg-zinc-300/30" />
            </div>
          </div>
          <div>
            <div className="relative h-20 w-20">
              <div className="absolute left-[16px] top-[16px] h-12 w-12 rounded-full bg-white" />
              <div className="absolute left-[34px] top-[34px] h-3 w-3 rounded-full bg-orange-500" />
              <div className="absolute left-0 top-0 h-20 w-20 rounded-full bg-zinc-300/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;
