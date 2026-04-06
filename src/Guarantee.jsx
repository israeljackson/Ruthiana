import { Check, CircleCheckBig } from "lucide-react";

function Guarantee() {
  return ( 
    <section className="px-4 sm:px-12 md:px-24 pt-20 pb-20 bg-stone-900">
      <CircleCheckBig className="h-17 w-17 justify-center items-center text-amber-500 mb-12 mx-auto"/>
      <h1 className="text-3xl md:text-6xl text-center text-white font-serif">100% Satisfaction Guarantee</h1>
      <p className="text-lg md:text-2xl text-white text-center mt-8">
        We stand by the quality of our fragrances. If you're not satisfied, we'll make it right.
      </p>
      <div className="flex flex-wrap flex-row gap-5 items-center justify-center mt-8">
        <div className="flex items-center">
          <Check className="h-3 w-3 md:h-6 md:w-6 text-amber-500 mr-2"/>
          <p className="text-white">Quality Tested</p>
        </div>
        <div className="flex items-center">
          <Check className="h-3 w-3 md:h-6 md:w-6 text-amber-500 mr-2"/>
          <p className="text-white">100% Satisfaction Guarantee</p>
        </div>
        <div className="flex items-center">
          <Check className="h-3 w-3 md:h-6 md:w-6 text-amber-500 mr-2"/>
          <p className="text-white">30-Day Money-Back Guarantee</p>
        </div>
      </div>
    </section>
   );
}

export default Guarantee;