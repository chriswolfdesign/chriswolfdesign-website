import React from "react";
import { TechnologyItemType } from "../types";
import Image from "next/image";

export default function TechnologyItem(props: {
  technology: TechnologyItemType;
  key: string;
}) {
  const { name, link } = props.technology;
  return (
    <div className="w-lg flex flex-col flex-auto md:basis-1/4 mb-7 items-center justify-center">
      <div className="p-4 flex flex-col items-center justify-center">
        <Image
          unoptimized
          src={link}
          alt={name}
          width={70}
          height={70}
          className="m-2"
        />
        {name}
      </div>
    </div>
  );
}
