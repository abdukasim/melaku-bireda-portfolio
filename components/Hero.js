import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="lg:mx-40" id="hero">
      <Image
        width={4693}
        height={3126}
        layout="intrinsic"
        src="/images/hero.jpg"
        alt="musician on stage"
      />
    </div>
  );
}
