import React from "react";

const SectionFive = () => {
  return (
    <section className="text-gray-600">
      <h1 className="py-16 text-center text-3xl font-normal text-black">
        Hand Pick
      </h1>
      <div className="flex items-center justify-around">
        <div>
          {" "}
          <article className="relative overflow-hidden">
            <div className="absolute left-2 top-2 rounded bg-red-500 px-3 py-1 text-xs font-bold text-white">
              New
            </div>
            <div>
              <img
                className="h-80 w-80 rounded-lg object-cover"
                src="/public/images/s-2-1.png"
                alt="Product 1"
              />
            </div>
            <div className="p-4">
              <h3 className="font-poppins text-lg font-semibold text-gray-600">
                L-SHAPE SOFA-PARIS
              </h3>

              <span className="font-poppins text-base font-medium text-zinc-700">
                $19.99
              </span>
            </div>
          </article>
          <article className="relative overflow-hidden">
            <div className="absolute left-2 top-2 rounded bg-red-500 px-3 py-1 text-xs font-bold text-white">
              New
            </div>
            <div>
              <img
                className="h-80 w-80 rounded-lg object-cover"
                src="/public/images/s-2-1.png"
                alt="Product 1"
              />
            </div>
            <div className="p-4">
              <h3 className="font-poppins text-lg font-semibold text-gray-600">
                L-SHAPE SOFA-PARIS
              </h3>

              <span className="font-poppins text-base font-medium text-zinc-700">
                $19.99
              </span>
            </div>
          </article>
        </div>

        <div>
          <img
            className="w-full rounded-lg object-cover"
            src="/public/images/sufa.png"
            alt="Product 1"
          />
        </div>

        <div>
          <article className="relative overflow-hidden">
            <div className="absolute left-2 top-2 rounded bg-red-500 px-3 py-1 text-xs font-bold text-white">
              New
            </div>
            <div>
              <img
                className="h-80 w-80 rounded-lg object-cover"
                src="/public/images/s-2-1.png"
                alt="Product 1"
              />
            </div>
            <div className="p-4">
              <h3 className="font-poppins text-lg font-semibold text-gray-600">
                L-SHAPE SOFA-PARIS
              </h3>

              <span className="font-poppins text-base font-medium text-zinc-700">
                $19.99
              </span>
            </div>
          </article>
          <article className="relative overflow-hidden">
            <div className="absolute left-2 top-2 rounded bg-red-500 px-3 py-1 text-xs font-bold text-white">
              New
            </div>
            <div>
              <img
                className="h-80 w-80 rounded-lg object-cover"
                src="/public/images/s-2-1.png"
                alt="Product 1"
              />
            </div>
            <div className="p-4">
              <h3 className="font-poppins text-lg font-semibold text-gray-600">
                L-SHAPE SOFA-PARIS
              </h3>

              <span className="font-poppins text-base font-medium text-zinc-700">
                $19.99
              </span>
            </div>
          </article>
        </div>
      </div>
      <div className="flex justify-center pb-32 pt-5">
        <span className="h-px w-[1000px] border border-zinc-100" />
      </div>
    </section>
  );
};

export default SectionFive;
