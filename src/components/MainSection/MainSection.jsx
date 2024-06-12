import React from 'react';
import { Link } from 'react-router-dom';
import Cake from '../../assets/cake3.jpg';
import Cake1 from '../../assets/cake1.jpg';
import Cake2 from '../../assets/cake4.jpg';


function MainSection() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1b1b1b]">
        <div className="container mx-auto space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-xl font-extrabold tracking-tighter sm:text-5xl text-[#FF6B6B]">
                Our Delectable Creations
              </h2>
              <p className="max-w-[900px] text-[#FF6B6B] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our mouthwatering selection of handmade cakes, crafted with love and attention to detail.
              </p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Chocolate Decadence', description: 'Rich chocolate cake with silky ganache frosting.', img: Cake1 },
              { title: 'Strawberry Delight', description: 'Light and fluffy sponge cake with fresh strawberries.', img: Cake },
              { title: 'Lemon Meringue', description: 'Tangy lemon curd topped with fluffy meringue.', img:Cake2},
            ].map((cake, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={cake.img}
                  alt={cake.title}
                  className="mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-xl object-cover shadow-lg"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-[#FF6B6B]">{cake.title}</h3>
                  <p className="text-[#FF6B6B]">{cake.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
    </main>
  );
}

export default MainSection;
