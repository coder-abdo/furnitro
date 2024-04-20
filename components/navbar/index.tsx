"use client";
import { useState } from "react";
import { Logo } from "./logo";
import { LinksList } from "./linksList";
import { Guest } from "./user/guest";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMedia } from "@/hooks/useMedia";
import { SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { isMobile } = useMedia();
  const handleClick = () => setIsClicked((prev) => !prev);
  return (
    <nav className="relative flex items-center justify-between p-6 bg-white">
      <Logo />
      <div
        className={cn("hidden md:flex items-center justify-center flex-grow", {
          "flex flex-col absolute bg-gray-300 rounded z-50 top-full right-7 max-w-40 w-full p-4":
            isMobile && isClicked,
        })}
      >
        <LinksList isMobile={isMobile} />
        <SignedIn>
          <div className="flex gap-2 items-center md:flex-row flex-col">
            <UserButton />
            <SignOutButton />
          </div>
        </SignedIn>
        <SignedOut>
          <Guest isMobile={isMobile} />
        </SignedOut>
      </div>
      <Button
        onClick={handleClick}
        className="md:hidden flex items-center justify-center bg-main hover:bg-transparent hover:text-main border border-main"
      >
        <AlignJustify />
      </Button>
    </nav>
  );
};
