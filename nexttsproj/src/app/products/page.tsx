import Link from "next/link";

export default function Products() {
  return (
    <ul>
      <Link href={"/"}>Home</Link>
      <li>
        this is <Link href={"/products/1"}>product 1</Link>
      </li>
      <li>
        this is <Link href={"/products/2"}>product 2</Link>
      </li>
      <li>
        this is{" "}
        <Link href={"/products/3"} replace>
          product 3
        </Link>
      </li>
    </ul>
  );
}
