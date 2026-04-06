import { FaWhatsapp } from "react-icons/fa";
function ProductCard({ name, price, image, description }) {
  return (
    <div className="bg-white rounded-lg cursor-pointer hover:-translate-y-1 transition-transform duration-300 overflow-hidden shadow-md">
      {/* Fixed image container */}
      <div className="aspect-square w-full overflow-hidden bg-amber-50">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Content area */}
      <div className="p-4">
        <h1 className="font-semibold text-2xl text-gray-800 line-clamp-1">{name}</h1>
        <p className="text-lg text-gray-600 mt-1 line-clamp-2">{description}</p>
        <p className="font-serif text-amber-700 text-lg mt-2 font-medium">{price}</p>

        <a 
          href="#" 
          className="rounded-full text-lg p-3 mt-4 bg-stone-900 text-white hover:bg-stone-800 
            hover:-translate-y-1 flex items-center justify-center transition-all duration-300 shadow-md"
        >
          <FaWhatsapp className="h-5 w-5 mr-2" />
          Order Now
        </a>
      </div>
    </div>

      
  );
}

export default ProductCard;