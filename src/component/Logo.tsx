import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MuseoModerno } from "next/font/google";
import { cn } from "@/lib/utils";

const museo = MuseoModerno({
  weight: "700",
  subsets: ["latin"],
});

export const Logo = () => {
  return (
    <Link href={"/"} className="flex flex-col items-start">
      <Image src={"/images/logo.svg"} height={50} width={50} alt="logo" />
      <h2 className={cn(museo.className, "text-xl")}>AI Wizard</h2>
    </Link>
  );
};
