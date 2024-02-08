"use client";

import Image from "next/image";
import AppStoreImage from "/public/app-store-white.svg";

export default function AppStoreButton() {
  return (
    <button onClick={() => console.log("click")}>
      <Image
        src={AppStoreImage}
        alt="Download on App Store"
        width={240}
        height={80}
      />
    </button>
  );
}
