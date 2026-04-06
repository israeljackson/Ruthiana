import { StarIcon } from "@heroicons/react/16/solid";

function ReviewCard({rating, review, name, location}) {
  const starCount = Math.min(5, Math.max(0, Math.floor(rating)))

  return ( 
    <div className="bg-white rounded-lg p-3 space-y-1.5">
      <div className="flex gap-1 items-center justify-center">
        {[...Array(starCount)].map((_, i) => (
          <StarIcon key={i} className="h-5 w-5 text-black" />
        ))}
      </div>

      <p className="font-bold text-lg mb-2">{review}</p>
      <p className="font-semibold ">{name}</p>
      <p className="text-sm">{location}</p>
    </div>
   );
}

export default ReviewCard;