function Order() {
  const steps = [{
    id:1,
    title: "Choose Your Fragrance",
    details:"Browse and pick your favorite scent."
  },{
    id:2,
    title: "Click 'Order on Whatsapp'",
    details:"You'll be redirected instantly."
  },{
    id:3,
    title: "Confim & Pay",
    details:"Pay via transfer, card, or USSD."
  },{
    id:4,
    title: "Recieve Your Order",
    details:"Fast delivery to your doorstep."
  }]
  return ( 
    <section className=" px-4 sm:px-12 md:px-24 pt-20 pb-20 bg-stone-900">
      <h1 className="text-3xl md:text-5xl text-center text-white font-serif">How to Order</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-amber-700 text-white text-xl font-bold">{step.id}</div>
            <h2 className="text-xl text-amber-50 text-center font-medium">{step.title}</h2>
            <p className="text-amber-50">{step.details}</p>
          </div>
        ))}
      </div>
    </section>
   );
}

export default Order;