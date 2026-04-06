function InfoCard({ title, description, icon: Icon }) {
  return (
    <div className="border border-amber-50 text-amber-50 rounded-lg p-6 text-center">
      <div className="w-full flex justify-center mb-4">
        {Icon && <Icon className="w-9 h-9 text-amber-500" />}
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="">{description}</p>
    </div>
  );
}

export default InfoCard;