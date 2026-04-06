import ProductCard from "./ProductCard";

function Bestsellers() {
  const bestsellers = [
    {
      name:"Dior Sauvage",
      price:"₦15,000",
      image:"images/dior-sauvage.webp",
      description:"Dark • Sensual • Deep"
    },
    {
      name:"Chanel Coco Mademoiselle Eau de Parfum",
      price:"₦27,000",
      image:"images/chanel-coco-mademoiselle.webp",
      description:"warm • Soft • Floral"
    },
    {
      name:"Chanel Bleu de Chanel",
      price:"₦49,000",
      image:"images/bleu-de-chanel.webp",
      description:"Woody • Romantic • Bold"
    }
  ]
  return ( 
    <section id="bestsellers" className="px-4 sm:px-12 md:px-24 pt-20 pb-20 bg-amber-50">
      <p className="text-sm text-center text-stone-600 font-semibold">MOST LOVED</p>
      <h1 className="text-3xl md:text-5xl text-center mt-4 mb-12 font-serif">🔥 Customer Favorites</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bestsellers.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>
    </section> 
   );
}

export default Bestsellers;