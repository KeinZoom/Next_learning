"use client";
import { useRouter } from "next/navigation";

export default function PlaceOrder() {
  const router = useRouter();
  const handleClick = () => {
    console.log("navigate by clicking");
    router.push("/");
  };
  return (
    <>
      <h1>Click to place order</h1>
      <button onClick={handleClick}>Place-Order</button>
    </>
  );
}
