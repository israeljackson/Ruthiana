function DeliveryCard({icon: Icon, location, duration}) {
  return ( 
    <div className="bg-white rounded-xl shadow-lg p-3 mt-9">
      {Icon && <Icon className="h-8 w-8 text-amber-700 mx-auto items-center mb-3"/>}
      <p className="font-semibold font-serif text-center text-xl">{location}</p>
      <p className="text-center mt-2 ">{duration}</p>
    </div>
   );
}

export default DeliveryCard;