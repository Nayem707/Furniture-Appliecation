import React from "react";

const products = [
  { id: 1, img: "", title: "Product Name 1", price: 20, rating: 5 },
  { id: 2, img: "", title: "Product Name 1", price: 20, rating: 5 },
  { id: 3, img: "", title: "Product Name 1", price: 20, rating: 5 },
  { id: 4, img: "", title: "Product Name 1", price: 20, rating: 5 },
  { id: 5, img: "", title: "Product Name 1", price: 20, rating: 5 },
  { id: 6, img: "", title: "Product Name 1", price: 20, rating: 5 },
  { id: 7, img: "", title: "Product Name 1", price: 20, rating: 5 },
  { id: 8, img: "", title: "Product Name 1", price: 20, rating: 5 },
];

const SectionThree = () => {
  return (
    <section className="">
      <h1 className="py-20 text-center text-3xl font-normal text-black">
        New Arrival
      </h1>
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Product Card 1 */}
        {products.map((item) => {
          return (
            <article key={item.id} className="relative overflow-hidden">
              <div className="absolute left-2 top-2 rounded bg-red-500 px-3 py-1 text-xs font-bold text-white">
                New
              </div>
              <img
                className="h-64 w-full rounded-lg object-cover"
                src="/images/s-2-1.png"
                alt="Product 1"
              />
              <div className="p-4">
                <h3 className="font-poppins text-lg font-semibold text-gray-600">
                  L-SHAPE SOFA-PARIS
                </h3>

                <span className="font-poppins text-base font-medium text-zinc-700">
                  $19.99
                </span>
              </div>
            </article>
          );
        })}

        {/* Repeat as needed for additional products */}
      </div>
    </section>
  );
};

export default SectionThree;
