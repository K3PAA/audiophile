"use client";
import Link from "next/link";

function BackLink() {
  return (
    <div className="container mb-6 mt-4 sm:mt-8 md:mb-14 md:mt-20">
      <Link href="/" className="text-black/50">
        Go Back
      </Link>
    </div>
  );
}

export default BackLink;
