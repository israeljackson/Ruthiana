import { ClockIcon, HeartIcon, PaperAirplaneIcon, StarIcon } from "@heroicons/react/24/outline";
import InfoCard from "./InfoCard";
function Info() {
  const info =[
    {
      title:"Long-Lasting Scents",
      icon:ClockIcon,
      description:"Smell fresh from morning till night."
    },
    {
      title:"Affordable Luxury",
      icon:StarIcon,
      description:"Premium fragrances without premium prices."
    },
    {
      title:"Fast Delivery",
      icon:PaperAirplaneIcon,
      description:"Lagos: 24–48hrs | Nationwide: 2–4 days"
    },
    {
      title:"Tested & Trusted",
      icon:HeartIcon,
      description:"Loved by hundreds of returning customers."
    }
  ]
  return ( 
    <section className=" px-4 sm:px-12 md:px-24 pt-20 pb-20 bg-stone-900">
      <h1 className="text-3xl md:text-5xl text-center text-white font-serif">Why Our Customers Keep Comming Back</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-17">
        {info.map((item, index) => (
        <InfoCard
          key={index}
          title={item.title}
          icon={item.icon}
          description={item.description}
        />
      ))}
      </div>
      
    </section>
    
   );
}

export default Info;