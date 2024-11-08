import React from "react";

const SectionSix = () => {
  return (
    <section className="flex items-center justify-center bg-slate-100 text-gray-500">
      <div className="flex w-full justify-center">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h1 className="border p-2">icon</h1>
            <h1 className="text-xs font-normal text-black">
              Subscribe to get $30 off* <br /> your first order
            </h1>
          </div>
          <input
            className="h-12 w-96 rounded-l border border-black bg-inherit px-4"
            type="text"
            name=""
            id=""
            placeholder="Enter your email "
          />
          <button className="h-[8vh] w-28 rounded-br-md rounded-tr-md bg-black">
            Submit
          </button>
        </div>
      </div>
      <div className="w-full">
        <img
          className="h-96 w-full object-cover"
          src="/images/house.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default SectionSix;
