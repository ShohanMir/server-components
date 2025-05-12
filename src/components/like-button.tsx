"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils"; // optional: utility for conditional classNames

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  // const randomCount = Math.floor(Math.random() * 100);
  const [count, setCount] = useState(10); // mock count

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <button
      onClick={toggleLike}
      className="flex items-center gap-1 text-sm text-gray-300 hover:text-red-500 transition"
    >
      <Heart
        className={cn("w-4 h-4", {
          "fill-red-500 stroke-red-500": liked,
          "stroke-gray-300": !liked,
        })}
      />
      {count}
    </button>
  );
}
