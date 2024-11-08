import React from "react";
const products = [
  { id: 1, img: "", title: "Product Name 1", price: 20, rating: 5 },
  { id: 2, img: "", title: "Product Name 1", price: 20, rating: 5 },
  { id: 3, img: "", title: "Product Name 1", price: 20, rating: 5 },
];
const SectionEight = () => {
  return (
    <section className="px-20 pt-32">
      <h1 className="mb-10 text-center text-3xl font-normal text-black">
        Our Blog
      </h1>
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {/* Product Card 1 */}
        {products.map((item) => {
          return (
            <article key={item.id} className="relative overflow-hidden">
              <div className="absolute left-5 top-4 rounded bg-white px-3 py-2 text-center text-xs font-bold text-black text-white">
                <p className="// June font-['Inter'] text-base font-normal text-black">
                  5 <br /> JUN
                </p>
              </div>
              <div className="w-full rounded-lg">
                <img
                  className="h-64 w-full object-fill"
                  src="/public/images/s-2-1.png"
                  alt="Product 1"
                />
              </div>
              <div className="space-y-3 p-4">
                <p className="w-96 font-roboto text-base font-medium text-orange-500">
                  Dining Chair{" "}
                </p>
                <h1 className="w-96 text-xl font-normal text-black">
                  DOUBLE SOFA- ATHENS
                </h1>

                <p className="font-['Roboto Slab'] w-96 text-base font-normal text-neutral-400">
                  "Elegant, ergonomic dining chair with premium materials and
                  modern design."
                </p>

                <button className="border-b border-gray-500 pt-6 text-xs font-normal text-black">
                  Read more{" "}
                </button>
              </div>
            </article>
          );
        })}

        {/* Repeat as needed for additional products */}
      </div>
    </section>
  );
};

export default SectionEight;
