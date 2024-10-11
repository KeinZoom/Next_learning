import Link from "next/link";
export default function F4() {
  return (
    <div>
      this is F4 segment
      <Link href={"/f1/f3"}>F3</Link>
    </div>
  );
}
