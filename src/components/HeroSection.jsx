import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[700px] min-w-full bg-[#e9f4ee]">
      <div className="flex justify-center">
        <div className="relative">
          <div className="left-0 top-0 pl-[450px] pt-[260px]">
            <h1 className="text-9xl font-normal text-orange-500">arrivals</h1>
          </div>
          <div className="absolute left-[330px] top-10">
            <img className="w-[400px]" src="/images/image-2.png" />
          </div>
          <div className="absolute -left-6 top-4">
            <img className="w-[500px] -rotate-6" src="/images/tree.png" />
          </div>

          <div className="absolute right-24 top-28 rotate-[90.59deg]">
            <h1 className="text-6xl">2024</h1>
          </div>

          <div className="absolute left-[140px] top-[140px]">
            <h1 className="text-9xl text-orange-200">New</h1>
          </div>
        </div>
      </div>

      <div className="absolute flex w-full justify-between text-gray-500">
        <div className="relative flex w-full justify-between">
          <div className="absolute -top-32 left-32">
            <h1 className="origin-right rotate-[90.59deg] text-sm">
              EDITION 2024
            </h1>
          </div>

          <div className="absolute left-[400px] top-10 flex gap-1">
            <img className="" src="/images/Rectangle 1098.png" alt="" />
            <div className="text-sm">
              <h1>TimberTrove</h1> <h1>Furniture</h1>
            </div>
          </div>

          <div className="absolute right-0 top-20">
            <p className="origin-left rotate-[90.59deg] text-sm">
              EDITION 2024
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-[600px] min-w-full">
        <div className="flex justify-center gap-16">
          <article className="relative h-[260px] w-[372px] rounded-lg bg-white shadow-lg">
            <header className="absolute -top-20 left-20">
              <img src="/images/chair/comfort-c.png" alt="" />
            </header>
            <main className="absolute left-28 top-32">
              <div className="text-center text-xl font-normal text-black">
                Comfy Chair
              </div>
              <div className="text-center text-sm font-normal text-[#fe9341]">
                $30.50
              </div>
            </main>
          </article>
          <article className="relative h-[260px] w-[372px] rounded-lg bg-white shadow-lg">
            <header className="absolute -top-20 left-20">
              <img src="/public/images/chair/fashion.png" alt="" />
            </header>
            <main className="absolute left-28 top-32">
              <div className="text-center text-xl font-normal text-black">
                Comfy Chair
              </div>
              <div className="text-center text-sm font-normal text-[#fe9341]">
                $30.50
              </div>
            </main>
          </article>
          <article className="relative h-[260px] w-[372px] rounded-lg bg-white shadow-lg">
            <header className="absolute -top-32 left-20">
              <img src="/public/images/chair/kisspng-c.png" alt="" />
            </header>
            <main className="absolute left-28 top-32">
              <div className="text-center text-xl font-normal text-black">
                Comfy Chair
              </div>
              <div className="text-center text-sm font-normal text-[#fe9341]">
                $30.50
              </div>
            </main>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
