import ReviewCard from "./review-card";

const reviews = [
  {
    rating: 2,
    comment: "Very unhappy with my purchase!",
    date: "2024-05-23T08:56:21.618Z",
    reviewerName: "John Doe",
    reviewerEmail: "john.doe@x.dummyjson.com",
  },
  {
    rating: 2,
    comment: "Not as described!",
    date: "2024-05-23T08:56:21.618Z",
    reviewerName: "Nolan Gonzalez",
    reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
  },
  {
    rating: 5,
    comment: "Very satisfied!",
    date: "2024-05-23T08:56:21.618Z",
    reviewerName: "Scarlett Wright",
    reviewerEmail: "scarlett.wright@x.dummyjson.com",
  },
];

async function getSimulatedReviews() {
  await new Promise((r) => setTimeout(r, 2000)); // simulate delay
  return reviews;
}

export default async function ProductReviews() {
  const data = await getSimulatedReviews();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      <div className="space-y-4">
        {data.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}
