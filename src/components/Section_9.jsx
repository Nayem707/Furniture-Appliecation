import React from "react";
const products = [
  { id: 1, img: "", title: "Product Name 1", price: 20, rating: 5 },
  { id: 2, img: "", title: "Product Name 1", price: 20, rating: 5 },
  { id: 3, img: "", title: "Product Name 1", price: 20, rating: 5 },
];
const SectionNine = () => {
  return (
    <section className="px-20">
      <h1 className="py-32 text-center text-3xl font-normal text-black">
        Feedback Corner
      </h1>
      <div className="grid grid-cols-1 gap-24 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {/* Product Card 1 */}
        {products.map((item) => {
          return (
            <article
              key={item.id}
              className="w-96 space-y-8 rounded-sm bg-white p-8 text-gray-500 shadow-lg"
            >
              <h1 className="text-4xl">“</h1>
              <h1>Emily Wilson</h1>
              <h1 className="text-base font-medium text-neutral-500">
                The customer experience was exceptional from start to finish.
                The website is user-friendly, the checkout process was smooth,
                and the clothes I ordered fit perfectly. I'm beyond satisfied!
              </h1>
            </article>
          );
        })}

        {/* Repeat as needed for additional products */}
      </div>
    </section>
  );
};

export default SectionNine;
