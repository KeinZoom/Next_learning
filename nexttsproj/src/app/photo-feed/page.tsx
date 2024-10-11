import wonderImages from "./wonder";
import Link from "next/link";
import Image from "next/image";
import "./styles.css";

export default function PhotoFeeder() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        Photo Feeder Section
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {wonderImages.map(({ id, name, src }) => (
          <div key={id}>
            <Link href={`/photo-feed/${id}`}>
              <Image
                src={src}
                alt={name}
                className="w-full object-cover aspect-square"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
