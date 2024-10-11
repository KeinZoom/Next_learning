import wonderImages from "../../../wonder";
import type { WonderImage } from "../../../wonder";
import Image from "next/image";

export default function ImageDetail({
  params,
}: {
  params: { imageId: string };
}) {
  const photo: WonderImage = wonderImages.find(
    (item) => item.id === params.imageId
  )!;
  return (
    <div className="container mx-auto my-10 z-index-1">
      <div>(..)</div>
      <div className="w-1/2 mx-auto">
        <Image
          src={photo.src}
          alt={photo.name}
          className="w-full object-cover aspect-square "
        ></Image>
        <div className="bg-white py-4">
          <div className="font-bold">photographer: {photo.photographer}</div>
          <div className="font-bold">location: {photo.location}</div>
        </div>
      </div>
    </div>
  );
}
