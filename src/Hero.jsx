import { FaWhatsapp } from "react-icons/fa";

function Hero() {
  return ( 
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-12 md:px-24 pt-30 pb-20 bg-stone-50">
      
      {/* Text Content */}
      <div className="flex flex-col justify-center text-center md:text-left">
        
        {/* Tag */}
        <p className="text-sm tracking-widest text-amber-700 font-medium">
          PREMIUM FRAGRANCES
        </p>

        {/* Headline */}
        <h1 className="text-5xl mt-4 mb-4 font-serif leading-tight text-stone-900">
          SMELL EXPENSIVE WITHOUT SPENDING A FORTUNE.
        </h1>

        {/* Subtext */}
        <p className="text-lg text-stone-600 mb-3">
          Long-lasting, high-quality fragrances delivered anywhere in Nigeria.
        </p>

        {/* Price */}
        <p className="font-serif mb-6 text-lg text-amber-700">
          From ₦8,500
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-semibold">
          
          {/* Primary CTA */}
          <a 
            href="#" 
            className="rounded-full text-lg p-3 bg-stone-900 text-white hover:bg-stone-800 
              hover:-translate-y-1 flex items-center justify-center transition-all duration-300 shadow-md"
          >
            <FaWhatsapp className="h-5 w-5 mr-2" />
            Order Now
          </a>

          {/* Secondary CTA */}
          <a 
            href="bestsellers" 
            className="rounded-full p-3 text-lg text-amber-700 border border-amber-700 
              hover:bg-amber-700 hover:text-white hover:-translate-y-1 
              transition-all duration-300 flex items-center justify-center"
          >
            ⚡ View Bestsellers
          </a>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex items-center justify-center">
        <img 
          src="images/Hero-image.png" 
          alt="Luxury Perfume" 
          className="max-w-full h-auto object-contain drop-shadow-xl"
        />
      </div>
        
    </section>
  );
}

export default Hero;