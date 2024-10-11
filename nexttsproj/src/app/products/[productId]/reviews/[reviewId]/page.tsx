"use client";
import ReviewNotFound from "./not-found";

interface Param {
  productId: string;
  reviewId: string;
}

const generateRamdomInt = () => {
  return Math.floor(Math.random() * 3);
};

export default function ReviewItem({ params }: { params: Param }) {
  if (parseInt(params.reviewId) > 100) {
    return <ReviewNotFound />;
  }
  const randInt = generateRamdomInt();
  if (randInt === 1) {
    throw new Error("error");
  }
  return (
    <div>
      review {params.reviewId} for product {params.productId}
    </div>
  );
}
