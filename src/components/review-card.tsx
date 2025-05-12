// components/ReviewCard.tsx
import { Review } from "@/types/product.interface";
import { Star } from "lucide-react";

export default function ReviewCard({ review }: { review: Review }) {
  const formattedDate = new Date(review.date).toLocaleDateString();

  return (
    <div className="bg-white/5 rounded-lg p-4 shadow border border-white/10">
      {/* Reviewer Name & Rating */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-white">{review.reviewerName}</span>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < review.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-500"
              }
            />
          ))}
        </div>
      </div>

      {/* Comment */}
      <p className="text-gray-300 text-sm">{review.comment}</p>

      {/* Footer: Email + Date */}
      <div className="mt-2 text-xs text-gray-500">
        {review.reviewerEmail} • {formattedDate}
      </div>
    </div>
  );
}
