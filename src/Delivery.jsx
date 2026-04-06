import { BoxIcon, MapPinIcon, Package, Truck } from "lucide-react";
import DeliveryCard from "./DeliveryCard";

function Delivery() {
  const deliveries = [
    {
      icon:MapPinIcon,
      location:"Lagos",
      duration:"1-2 working days"
    },
    {
      icon:Package,
      location:"Outside Lagos",
      duration:"2-4 working days"
    },
    {
      icon:Truck,
      location:"Nationwide",
      duration:"Delivery available everywhere"
    },
  ]
  return ( 
    <section className="px-4 sm:px-12 md:px-24 pt-25 pb-20 bg-stone-50">
      <h1 className="text-3xl md:text-5xl text-center font-serif">Delivery Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {deliveries.map((delivery, index) => (
          <DeliveryCard
          key={index}
          icon={delivery.icon}
          location={delivery.location}
          duration={delivery.duration}
        />
        ))}
      </div>
    </section>
   );
}

export default Delivery;