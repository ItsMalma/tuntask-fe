/* eslint-disable jsx-a11y/alt-text */
"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

export type LoadableImageProps = ImageProps;

export default function LoadableImage({
  onLoad,
  ...props
}: LoadableImageProps) {
  const [isLoadComplete, setIsLoadComplete] = useState(false);

  return (
    <div className="relative">
      <Image
        {...props}
        onLoad={(e) => {
          console.log("test");
          setIsLoadComplete(true);
          if (onLoad) onLoad(e);
        }}
      />
      {!isLoadComplete && (
        <span
          className="animate-pulse absolute top-0 left-0 bg-background-dark block rounded-full"
          style={{ width: props.width, height: props.height }}
        ></span>
      )}
    </div>
  );
}
