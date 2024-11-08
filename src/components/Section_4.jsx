import React from "react";

const SectionFour = () => {
  return (
    <section className="">
      <div className="relative flex h-[80vh] items-center gap-20 bg-slate-500 px-32 text-gray-100">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl">Best Deals</h1>
            <h1 className="text-xl">$77.00</h1>
          </div>
          <div className="space-y-4">
            <p className="font-['Mochiy Pop One'] text-xl font-normal leading-loose text-neutral-100">
              Grab your best <br /> offers!!
            </p>
            <div className="inline-flex h-12 w-36 items-center justify-center gap-2.5 rounded-lg bg-white p-2.5">
              <button className="font-['Mochiy Pop One'] text-base font-normal leading-snug text-black">
                Shop now
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="space-y-2 text-center">
            <h1 className="h-16 w-16 rounded-lg bg-orange-500 pt-5">1</h1>
            <h1>DAYS</h1>
          </div>
          <div className="space-y-2 text-center">
            <h1 className="h-16 w-16 rounded-lg bg-orange-500 pt-5">1</h1>
            <h1>HOUR</h1>
          </div>
          <div className="space-y-2 text-center">
            <h1 className="h-16 w-16 rounded-lg bg-orange-500 pt-5">1</h1>
            <h1>MINS</h1>
          </div>
          <div className="space-y-2 text-center">
            <h1 className="h-16 w-16 rounded-lg bg-orange-500 pt-5">1</h1>
            <h1>SECS</h1>
          </div>
        </div>
        <div className="absolute right-[350px] top-20">
          <img className="w-full" src="/images/table.png" alt="" />
        </div>
        <div className="absolute right-0 top-56">
          <img className="w-96" src="/images/chair.png" alt="" />
        </div>
      </div>
      <div className="h-28 w-full bg-stone-300" />
    </section>
  );
};

export default SectionFour;
