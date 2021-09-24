import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PlaceItem({ title, image }) {
  return (
    <>
      <div className="relative w-36 h-24">
        <Link href="/">
          <a>
            <Image
              src={image}
              alt="Destination city"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
            <span className="absolute top-16 left-3 text-white font-medium">
              {title}
            </span>
          </a>
        </Link>
      </div>
    </>
  );
}
