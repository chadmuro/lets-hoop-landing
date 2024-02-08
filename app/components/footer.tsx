import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full h-16 flex items-center justify-center px-8 max-w-screen-lg text-orange-800">
      ©
      <Link
        className="px-1 hover:underline "
        href="https://www.chadmuro.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chad Murobayashi
      </Link>
      2024
    </footer>
  );
}

export default Footer;
