import ReviewCard from "./ReviewCards";

function Reviews() {
  const reviews = [
    {
      review:'"🔥 This perfume lasted ALL day. I\'m shocked!"',
      rating: 4,
      name:"Chioma",
      location:"lagos"
    },
    {
      review:'"I\'ve ordered 3 times already. No regrets."',
      rating: 5,
      name:"Favour",
      location:"Port Harcourt"
    },
    {
      review:'"The packaging alone is worth it. So premium!"',
      rating: 5,
      name:"Blessing",
      location:"Benin"
    },
    {
      review:'"Omo this smells like designer perfume 😭"',
      rating: 4,
      name:"Tunde",
      location:"Abuja"
    },
    {
      review:'"Best perfume vendor I\'ve found online. Period."',
      rating: 5,
      name:"Emeka",
      location:"Enugu"
    },
    {
      review:'"My colleagues keep asking what I\'m wearing 💯"',
      rating: 5,
      name:"Adaeze",
      location:"Lagos"
    },
  ]
  return ( 
    <section id="reviews" className="px-4 sm:px-12 md:px-24 pt-25 pb-20 bg-stone-50 font-serif">
      <p className="text-sm text-center text-amber-700 font-medium">REAL TALK</p>
      <h1 className="text-3xl md:text-5xl text-center mt-4 mb-12">What Our Customers Are Saying</h1>

      {/* Review Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <ReviewCard 
          key={index}
          rating={review.rating}
          review={review.review}
          name={review.name}
          location={review.location}
        />
        ))}
      </div>
    </section>
   );
}

export default Reviews;