import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/letshoop_logo.png";

function Header() {
  return (
    <header className="w-full h-16 flex items-center justify-center px-8 bg-orange-800 text-white">
      <div className="w-full max-w-screen-lg flex items-center justify-between ">
        <div className="flex gap-2 items-center">
          <Image src={Logo} alt="Let's Hoop logo" height={32} width={32} />
          <Link href="/">Let's Hoop</Link>
        </div>
        <div className="flex gap-2 items-center">
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
