import React from "react";

const SectionTeen = () => {
  return (
    <section className="mb-20 px-20">
      <h1 className="py-32 text-center text-3xl font-normal text-black">
        Top Brand
      </h1>
      <div className="grid grid-cols-1 gap-24 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {/* Product Card 1 */}

        <img src="/public/images/brand_logo/image 4.png" alt="" />
        <img src="/public/images/brand_logo/image 5.png" alt="" />
        <img src="/public/images/brand_logo/image 6.png" alt="" />
        <img src="/public/images/brand_logo/image 7.png" alt="" />
        <img src="/public/images/brand_logo/image 8.png" alt="" />

        {/* Repeat as needed for additional products */}
      </div>
    </section>
  );
};

export default SectionTeen;
